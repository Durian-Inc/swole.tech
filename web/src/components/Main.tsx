import React, { Component } from 'react';
import Login from './Login';
import WorkoutList from './WorkoutList';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Home} />
          <Route exact path="/teams/:name" component={Home} />
          <Route exact path="/workout" component={WorkoutList} />
          <Route exact path="/workout/:id" component={WorkoutList} />
          <Route exact path="/search" component={WorkoutList} />
          <Route exact path="/profile" component={Login} />
          <Route exact path="/profile/:name" component={Login} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
