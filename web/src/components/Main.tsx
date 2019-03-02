import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Feed from './Feed';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddBoxIcon from '@material-ui/icons/AddBox';
import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <Feed />
      </div>
    );
  }
}

export default Main;
