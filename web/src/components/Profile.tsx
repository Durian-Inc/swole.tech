import React, { Component } from 'react';
import Feed from './Feed';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import Navigation from './Navigation';
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
  border: 1px solid white;
  background: white;
  margin-top: 10px;
`

function generate(element: any) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class Profile extends Component<any, any> {
  state = {
    value: 0,
  };

  handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    var friendsList = <List>
                        {generate(
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar>
                                D
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary="Single-line item"
                            />
                          </ListItem>,
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
            <h1 style={{marginTop: '-5px'}}>David Gardiner</h1>
            <div style={{marginTop: '-35px'}}>
              <div style={{width: '33%', float: 'left'}}>
                <p style={{fontSize: '20px'}}>Workouts</p>
                <p style={{marginTop: '-20px'}}>123</p>
              </div>
              <div style={{width: '33%', float: 'left'}}>
                <p style={{fontSize: '20px'}}>Friends</p>
                <p style={{marginTop: '-20px'}}>0</p>
              </div>
              <div style={{width: '33%', float: 'left'}}>
                <p style={{fontSize: '20px'}}>Teams</p>
                <p style={{marginTop: '-20px'}}>2</p>
              </div>
            </div>
          </UpperDiv>
          <AppBar position="static" style={{background: 'grey'}}>
            <Tabs value={value} onChange={this.handleChange} indicatorColor='primary' variant='fullWidth'>
              <Tab label="Your Feed" />
              <Tab label="Friends List" />
            </Tabs>
          </AppBar>
          {value === 0 && <Feed />}
          {value === 1 && friendsList}
        </Card>
      </Navigation>
    );
  }
}

export default Profile;