import React, { Component } from 'react';
import Feed from './Feed';
import Navigation from './Navigation';
import Stories from './Stories';

class Home extends Component<any, any> {
  render() {
    return (
      <Navigation>
        <Stories style={{overflow: 'hidden'}} stories={[{name: "Tom", category:"Legs"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}]} />
        <Feed />
      </Navigation>
    );
  }
}

export default Home;
