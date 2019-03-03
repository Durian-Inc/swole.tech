import React, { Component } from 'react';
import Feed from './Feed';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import Navigation from './Navigation';
import { URL } from './index';
import 'typeface-roboto';

const ProfileDiv = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  font-family: Roboto;
`

const UpperDiv = styled.div`
  height: 250px;
  background: lightgrey;
  text-align: center;
`

const ProfileImage = styled.img`
  text-align: center;
  width: 125px;
  border-radius: 50%;
  border: 1px solid #64838e;
  background: white;
  margin-top: 10px;
`

class Profile extends Component<any, any> {
  state = {
    value: 0,
    user: {
      name: "",
      buddies: [],
      posts: []
    },
    workouts: [],
    teams: []
  };

  componentWillMount() {
    const name = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    fetch(URL + "/profile/" + name)
      .then(res => res.json())
      .then(result => {
        this.setState({
          user: result
        });
      })
    fetch(URL + "/profile/" + name + "/lives")
      .then(res => res.json())
      .then(result => {
        this.setState({
          workouts: result
        });
      })
  }

  handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  render() {
    const { value, user, workouts, teams } = this.state;
    console.log("NUMTEAM", teams.length)
    var friendsList = <List>
                        { user.buddies.map((item: any, index: number) => 
                            <ListItem key={index}>
                              <ListItemAvatar>
                                <Avatar style={{background: '#64838e'}}>
                                {item.name.substring(0,1).toUpperCase()}
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={item.name}
                              />
                              <ListItemSecondaryAction>
                                <Button variant="contained">
                                  Remove Friend
                                </Button>
                              </ListItemSecondaryAction>
                            </ListItem>
                        )}
                      </List>

    return (
      <Navigation>
        <Card style={{
                textAlign: 'left',
                margin: 'auto',
                width: '100%',
                minHeight: '100vh',
                maxWidth: '500px',
                borderRadius: 0
              }}
        >
          <UpperDiv>
            <ProfileImage src={require('../static/workout.png')}/>
            <h1 style={{marginTop: '-5px'}}>{user.name}</h1>
            <div style={{marginTop: '-35px'}}>
              <div style={{width: '33%', float: 'left'}}>
                <p style={{fontSize: '20px'}}>Workouts</p>
                <p style={{marginTop: '-20px'}}>{workouts.length}</p>
              </div>
              <div style={{width: '33%', float: 'left'}}>
                <p style={{fontSize: '20px'}}>Friends</p>
                <p style={{marginTop: '-20px'}}>{user.buddies.length}</p>
              </div>
              <div style={{width: '33%', float: 'left'}}>
                <p style={{fontSize: '20px'}}>Teams</p>
                <p style={{marginTop: '-20px'}}>2</p>
              </div>
            </div>
          </UpperDiv>
          <AppBar position="static" style={{background: '#64838e'}}>
            <Tabs value={value} onChange={this.handleChange} indicatorColor='primary' variant='fullWidth'>
              <Tab label="Your Feed" />
              <Tab label="Friends List" />
            </Tabs>
          </AppBar>
          {
            value ? friendsList : <Feed posts={user.posts} />
          }
        </Card>
      </Navigation>
    );
  }
}

export default Profile;
