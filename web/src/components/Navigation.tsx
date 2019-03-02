import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Link } from 'react-router-dom';

class Navigation extends Component<any, any> {
  render() {
    const name = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    return (
      <div>
        {this.props.children}
        <BottomNavigation
          style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            borderTop: '1px solid lightgrey',
            WebkitBoxShadow: '0px 0px 2px 0px rgba(242,242,242,1)',
            MozBoxShadow: '0px 0px 2px 0px rgba(242,242,242,1)',
            boxShadow: '0px 0px 2px 0px rgba(242,242,242,1)',
            textDecoration: 'none'
          }}
        >
          <Link to='/' style={{textDecoration: 'none'}}>
            <BottomNavigationAction
              style={{marginLeft: '-5px', marginRight: '-5px', textDecoration: 'none'}}
              label='Feed'
              icon={<HomeIcon />}
              showLabel
            />
          </Link>
          <Link to={'/teams/' + name} style={{textDecoration: 'none'}}>
            <BottomNavigationAction
              style={{marginLeft: '-5px', marginRight: '-5px', textDecoration: 'none'}}
              label='Teams'
              icon={<GroupIcon />}
              showLabel
            />
          </Link>
          <Link to='/workout' style={{textDecoration: 'none'}}>
            <BottomNavigationAction
              label='Create'
              icon={<AddBoxIcon />}
              showLabel
            />
          </Link>
          <Link to='/search' style={{textDecoration: 'none'}}>
            <BottomNavigationAction
              style={{marginLeft: '-5px', marginRight: '-5px', textDecoration: 'none'}}
              label='Search'
              icon={<SearchIcon />}
              showLabel
            />
          </Link>
          <Link to={'/profile/' + name} style={{textDecoration: 'none'}}>
            <BottomNavigationAction
              style={{marginLeft: '-5px', marginRight: '-5px', textDecoration: 'none'}}
              label='Profile'
              icon={<PersonIcon />}
              showLabel
            />
          </Link>
        </BottomNavigation>
      </div>
    );
  }
}

export default Navigation;
