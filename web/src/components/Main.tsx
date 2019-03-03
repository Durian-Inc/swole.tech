import React, { Component } from 'react';
import Login from './Login';
import Workout from './Workout';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Teams from './Teams';
import MakePost from './MakePost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/teams/:name" component={Teams} />
          <Route exact path="/workout" component={Workout} />
          <Route exact path="/workout/:id" component={Workout} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:name" component={Profile} />
          <Route exact path="/post/:workoutId" component={MakePost} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
