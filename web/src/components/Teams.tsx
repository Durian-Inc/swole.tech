import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styled from 'styled-components';
import Navigation from './Navigation';
import TeamCreate from './TeamCreate';
import TeamView from './TeamView';
import { URL } from './index';
import 'typeface-roboto';

const TeamNames = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  float: left;
`

function generate(element: any) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class Teams extends Component<any, any> {
  state = {
    value: 0,
    users: [],
    teams: [],
    team: '',
    teamView: false,
    name: document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
    isLoaded: false,
    error: null
  };

  handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  componentDidMount() {
    fetch(URL + "/teams/" + this.state.name)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            teams: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

    fetch(URL + "/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result,
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

  handleClick = (team: any) => (event: any) => {
    this.setState({ team: team, teamView: true })
  }

  handleOtherWay = () => {
    this.setState({ teamView: false })
  }

  render() {
    const { value } = this.state;

    var teams = <div>
                  {this.state.teams ? (
                    this.state.teams.map((item: any, index: number) =>
                      <a onClick={this.handleClick(item)} style={{
                          margin: 'auto',
                          width: '100%',
                          height: '100%',
                          textDecoration: 'none',
                          color: 'black'
                        }}
                      >
                        <Card style={{
                            textAlign: 'left',
                            width: '95%',
                            height: '100%',
                            margin: 'auto',
                            marginTop: '15px',
                            padding: '10px 0px'
                          }}
                        >
                          <div style={{width: '100%', height: '100%'}}>
                            <TeamNames>
                              <h1 style={{margin: 0}}>{item}</h1>
                            </TeamNames>
                            <ArrowForwardIosIcon style={{height: '100%', float: 'right', marginRight: '20px', marginTop: '10px'}} />
                          </div>
                        </Card>
                      </a>
                    )
                  ) : null }
                </div>

    if(!this.state.teamView)
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
            <AppBar position="static" style={{background: '#64838e'}}>
              <Tabs value={value} onChange={this.handleChange} indicatorColor='primary' variant='fullWidth'>
                <Tab label="Your Teams" />
                <Tab label="Create a Team" />
              </Tabs>
            </AppBar>
            {value === 0 && teams}
            {value === 1 && <div><TeamCreate users={this.state.users} /></div>}
          </Card>
        </Navigation>
      );
    else
      return (
        <div><TeamView team={this.state.team} goBack={this.handleOtherWay} /></div>
      );
  }
}

export default Teams;
