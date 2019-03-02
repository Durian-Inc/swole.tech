import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Feed from './Feed';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddBoxIcon from '@material-ui/icons/AddBox';

class Navigation extends Component<any, any> {
  render() {
    return (
      <div>
        {this.props.children}
        <BottomNavigation
          style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            borderTop: '1px solid lightgrey',
            webkitBoxShadow: '0px 0px 2px 0px rgba(242,242,242,1)',
            mozBoxShadow: '0px 0px 2px 0px rgba(242,242,242,1)',
            boxShadow: '0px 0px 2px 0px rgba(242,242,242,1)'
          }}
          showLabels
        >
          <BottomNavigationAction
            style={{marginRight: '-10px'}}
            label="Feed"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            style={{marginRight: '-10px'}}
            label="Teams"
            icon={<GroupIcon />}
          />
          <BottomNavigationAction
            label="Create"
            icon={<AddBoxIcon />}
          />
          <BottomNavigationAction
            style={{marginLeft: '-10px'}}
            label="Search"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            style={{marginLeft: '-10px'}}
            label="Profile"
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default Navigation;
