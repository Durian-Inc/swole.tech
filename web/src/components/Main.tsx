import React, { Component } from 'react';
import Login from './Login';
import WorkoutList from './WorkoutList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/workout" component={WorkoutList} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
