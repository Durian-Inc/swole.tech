import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fc7f00',
    },
    secondary: {
      main: '#64838e',
    },
  },
});

const StyledNavAction = withStyles({
  wrapper: {
    color: '#fc7f00'
  },
  label: {
    color: '#64838e'
  }
})(BottomNavigationAction);

const StyledNavActionSecondary = withStyles({
  label: {
    color: '#64838e'
  }
})(BottomNavigationAction);

const Header = styled.div`
  height: 30px;
  background: lightgrey;
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin: auto;
`

class Navigation extends Component<any, any> {
  render() {
    const name = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    return (
      <MuiThemeProvider theme={theme}>
        <div style={{overflowX: 'hidden'}}>
          <div
            style={{
              width: '100%',
              height: '50px',
              top: 0,
              border: '1px solid lightgrey',
              borderLeft: 'none',
              borderRight: 'none',
              textDecoration: 'none',
            }}
          >
            <h1 style={{textAlign: 'center', margin: 'auto', paddingTop: '5px', color: '#64838e'}}>swole.<span style={{color: '#FC7F00'}}>tech</span></h1>
          </div>
          {this.props.children}
          <BottomNavigation
            style={{
              width: '100%',
              position: 'fixed',
              bottom: 0,
              border: '1px solid lightgrey',
              borderLeft: 'none',
              borderRight: 'none',
              WebkitBoxShadow: '0px 0px 2px 0px rgba(242,242,242,1)',
              MozBoxShadow: '0px 0px 2px 0px rgba(242,242,242,1)',
              boxShadow: '0px 0px 2px 0px rgba(242,242,242,1)',
              textDecoration: 'none',
            }}
          >
            <Link to='/' style={{textDecoration: 'none'}}>
              <StyledNavActionSecondary
                style={{marginLeft: '-5px', marginRight: '-5px', textDecoration: 'none'}}
                label='Feed'
                icon={<HomeIcon />}
                showLabel
              />
            </Link>
            <Link to={'/teams/' + name} style={{textDecoration: 'none'}}>
              <StyledNavActionSecondary
                style={{marginLeft: '-5px', marginRight: '-5px', textDecoration: 'none'}}
                label='Teams'
                icon={<GroupIcon />}
                showLabel
              />
            </Link>
            <Link to='/workout' style={{textDecoration: 'none'}}>
              <StyledNavAction
                label='Create'
                icon={<AddBoxIcon />}
                showLabel
              />
            </Link>
            <Link to='/search' style={{textDecoration: 'none'}}>
              <StyledNavActionSecondary
                style={{marginLeft: '-5px', marginRight: '-5px', textDecoration: 'none'}}
                label='Search'
                icon={<SearchIcon />}
                showLabel
              />
            </Link>
            <Link to={'/profile/' + name} style={{textDecoration: 'none'}}>
              <StyledNavActionSecondary
                style={{marginLeft: '-5px', marginRight: '-5px', textDecoration: 'none'}}
                label='Profile'
                icon={<PersonIcon />}
                showLabel
              />
            </Link>
          </BottomNavigation>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Navigation;
