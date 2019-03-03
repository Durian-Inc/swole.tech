import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import SearchBar from 'material-ui-search-bar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import { URL } from './index';
import 'typeface-roboto';

const TeamNames = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  float: left;
`

class TeamCreate extends Component<any, any> {
  state = {
    value: '',
    team: '',
    members: [],
    name: document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
    redirect: false
  };

  handleTeamChange = (event: any) => {
    this.setState({ team: event.target.value });
  };

  handleMemberChange = (event: any) => {
    this.setState({ team: event.target.value });
  };

  handleCheckChange = (event: any) => {
    var members = this.state.members
    var person = this.props.users[event.target.value].name
    var contains = false
    for(var i=0; i<members.length; i++)
      if(members[i] === person)
        contains = true
    if(contains === true)
      members = members.filter(member => member !== person)
    else
      members = members.concat(person)
    console.log(members)
    this.setState({ members: members });
  };

  handleFormSubmission = () => {
    const data = {name: this.state.team}
    console.log(data)
    fetch(URL + "/teams/" + this.state.name, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => console.log(res))
    .catch(res => console.log(res))
    const person = {member: this.state.name, team: this.state.team, is_manager: true}
    console.log(person)
    fetch(URL + "/teams/" + this.state.name, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify(person)
    })
    .then(res => console.log(res))
    .catch(res => console.log(res))
    for(var i=0; i<this.state.members.length; i++) {
      const data = {member: this.state.members[i], team: this.state.team, is_manager: false}
      console.log(data)
      fetch(URL + "/teams/" + this.state.name, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: JSON.stringify(data)
      })
      .then(res => console.log(res))
      .catch(res => console.log(res))
    }
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }

    var users = <List>
                  {this.props.users ? (
                    this.props.users.map((item: any, index: number) =>
                        <ListItem key={index}>
                          <ListItemAvatar>
                          <Avatar aria-label="name" style={{background: '#64838e'}}>{item.name.substring(0,1).toUpperCase()}</Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.name}
                          />
                          <ListItemSecondaryAction>
                            <Checkbox
                              onChange={this.handleCheckChange}
                              value={index.toString()}
                            />
                          </ListItemSecondaryAction>
                        </ListItem>
                    )
                  ) : null}
                </List>


    return (
      <Card style={{
              textAlign: 'left',
              margin: 'auto',
              width: '100%',
              minHeight: '100vh',
              maxWidth: '500px',
              borderRadius: 0
            }}
      >
        <form noValidate autoComplete="off" style={{width: '90%', margin: 'auto'}}>
          <TextField
            id="standard-name"
            label="Team Name"
            value={this.state.team}
            onChange={this.handleTeamChange}
            margin="normal"
            style={{width: '70%', float: 'left'}}
            color='primary'
          />
          <Button onClick={this.handleFormSubmission} variant='contained' style={{float: 'right', marginTop: '25px', marginLeft: '5px'}}>
            Create
          </Button>
        </form>
        <div style={{width: '95%', maxWidth: '500px', margin: 'auto', marginTop: '10px'}}>
          <SearchBar
            value={this.state.value}
            onChange={(newValue) => this.setState({ value: newValue })}
            onRequestSearch={() => alert(this.state.value)}
            style={{width: '100%'}}
          />
          {users}
        </div>

      </Card>
    );
  }
}

export default TeamCreate;