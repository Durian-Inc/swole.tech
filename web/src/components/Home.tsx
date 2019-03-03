import React, { Component } from 'react';
import Feed from './Feed';
import Navigation from './Navigation';
import Stories from './Stories';

const stories = [{name: "Tom", category:"Legs"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}, {name: "Steve", category:"Arms"}]

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentWillMount() {
    const name = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
 
    fetch('http://localhost:8080/users/' + name)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    console.log(data ? data.live : []);
    return (
      <Navigation>
        { data ? (
          <div>
            <Stories style={{overflow: 'hidden'}} stories={data.live} />
            <Feed posts={data.feed} />
          </div>
        ) : null}
      </Navigation>
    );
  }
}

export default Home;
