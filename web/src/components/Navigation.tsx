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
  state = {
    value: 0
  }

  render() {
    const { value } = this.state

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
            boxShadow: '0px 0px 2px 0px rgba(242,242,242,1)'
          }}
        >
          <Link to='/'>
            <BottomNavigationAction
              style={{marginLeft: '-5px', marginRight: '-5px'}}
              label='Feed'
              icon={<HomeIcon />}
              showLabel
            />
          </Link>
          <Link to='/teams'>
            <BottomNavigationAction
              style={{marginLeft: '-5px', marginRight: '-5px'}}
              label='Teams'
              icon={<GroupIcon />}
              showLabel
            />
          </Link>
          <Link to='/workout'>
            <BottomNavigationAction
              label='Create'
              icon={<AddBoxIcon />}
              showLabel
            />
          </Link>
          <Link to='/search'>
            <BottomNavigationAction
              style={{marginLeft: '-5px', marginRight: '-5px'}}
              label='Search'
              icon={<SearchIcon />}
              showLabel
            />
          </Link>
          <Link to='/profile'>
            <BottomNavigationAction
              style={{marginLeft: '-5px', marginRight: '-5px'}}
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
