import React, { Component } from 'react';
import Feed from './Feed';
import Navigation from './Navigation';

class Home extends Component<any, any> {
  render() {
    return (
      <Navigation>
        <Feed />
      </Navigation>
    );
  }
}

export default Home;
