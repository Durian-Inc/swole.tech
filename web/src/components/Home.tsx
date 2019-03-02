import React, { Component } from 'react';
import Feed from './Feed';
import Navigation from './Navigation';
import Stories from './Stories';

class Home extends Component<any, any> {
  render() {
    return (
      <Navigation>
        <Stories stories={[{name: "Tom", category:"legs"}, {name: "Steve", category:"arms"}]} />
        <Feed />
      </Navigation>
    );
  }
}

export default Home;
