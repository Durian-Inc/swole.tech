import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Navigation from './Navigation';
import { URL } from './index';
import 'typeface-roboto';

const UpperDiv = styled.div`
  height: 90px;
  background: lightgrey;
  text-align: center;
  margin-top: -25px;
`

class TeamView extends Component<any, any> {
  state = {
    value: 'player',
    people: [],
    manager: '',
    name: document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  };

  handleChange = (event: any) => {
    this.setState({ value: event.target.value });
    console.log(this.state.value)
  };

  handleCheckChange = (event: any) => {
    var members = this.state.people
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

  componentDidMount() {
    var matching = this.state.people
    fetch(URL + "/teams")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          result.forEach((item: any) => {
            if(item.team.name === this.props.team) {
              matching = matching.concat(item.member.name)
              this.setState({ people: matching})
              if(item.is_manager)
                this.setState({ manager: item.member.name })
            }
          })

          this.setState({
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { value } = this.state;
    var display;

    var recents = <div>
      <Card style={{
            textAlign: 'left',
            width: '95%',
            height: '100%',
            margin: 'auto',
            marginTop: '50px',
            marginBottom: '-35px'
          }}
        >
          <h2 style={{margin: 0, padding: 0, paddingLeft: '5px'}}>3/3/2019</h2>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>David Gardiner - Workout Name Goes Here</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column'}}>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Categories</span> - Lower Body, Soccer
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Completion Time</span> - 37:49
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Exercises</span> - Squats, Lunges
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Innocent Niyibizi - Workout Name Goes Here</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column'}}>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Categories</span> - Lower Body, Soccer
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Completion Time</span> - 37:49
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Exercises</span> - Squats, Lunges
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Card>
        <Card style={{
            textAlign: 'left',
            width: '95%',
            height: '100%',
            margin: 'auto',
            marginTop: '50px',
            marginBottom: '-35px'
          }}
        >
          <h2 style={{margin: 0, padding: 0, paddingLeft: '5px'}}>3/2/2019</h2>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>David Gardiner - Workout Name Goes Here</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column'}}>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Categories</span> - Lower Body, Soccer
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Completion Time</span> - 37:49
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Exercises</span> - Squats, Lunges
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Innocent Niyibizi - Workout Name Goes Here</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column'}}>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Categories</span> - Lower Body, Soccer
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Completion Time</span> - 37:49
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Exercises</span> - Squats, Lunges
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Card>
    </div>

    var players = <div>
                    {this.state.people ? (
                    this.state.people.map((item: any, index: number) =>
      <Card style={{
            textAlign: 'left',
            width: '95%',
            height: '100%',
            margin: 'auto',
            marginTop: '50px',
            marginBottom: '-35px'
          }}
        >
          <h2 style={{margin: 0, padding: 0, paddingLeft: '5px'}}>{item}</h2>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Workout 1 - 3/1/2019</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column'}}>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Categories</span> - Lower Body, Soccer
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Completion Time</span> - 37:49
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Exercises</span> - Squats, Lunges
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Workout 2 - 3/3/2019</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column'}}>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Categories</span> - Lower Body, Soccer
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Completion Time</span> - 37:49
              </Typography>
              <Typography>
                <span style={{fontWeight: 'bold'}}>Exercises</span> - Squats, Lunges
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Card>
                    )) : null}
      </div>

    if(this.state.value === 'player')
      display = players;
    else
      display = recents;

    return (
      <Navigation>
        <Card style={{
                textAlign: 'left',
                margin: 'auto',
                width: '100%',
                minHeight: '100vh',
                maxWidth: '500px',
                paddingBottom: '65px',
                borderRadius: 0
              }}
        >
          <UpperDiv>
            <a onClick={this.props.goBack} style={{color: 'black'}}>
              <ArrowBackIosIcon style={{float: 'left', paddingTop: '35px', paddingLeft: '30px', marginRight: '-50px'}}/>
            </a>
            <h1 style={{paddingTop: '10px'}}>{this.props.team}</h1>
            <div style={{marginTop: '-25px'}}>
              <p style={{fontSize: '20px'}}>{this.state.manager}</p>
            </div>
          </UpperDiv>
          <div style={{margin: 'auto', width: '100%'}}>
            <p style={{float: 'left', paddingLeft: '15px'}}>Sort By</p>
            <FormControlLabel
              checked={this.state.value === 'player'}
              value='player'
              onChange={this.handleChange}
              control={<Radio color="primary" />}
              label="Player"
              labelPlacement="start"
              style={{float: 'right', paddingRight: '15px'}}
            />
            <FormControlLabel
              checked={this.state.value === 'recent'}
              value='recent'
              onChange={this.handleChange}
              control={<Radio color="primary" />}
              label="Recent"
              labelPlacement="start"
              style={{float: 'right'}}
            />
          </div>
          {display}
        </Card>
      </Navigation>
    );
  }
}

export default TeamView;
