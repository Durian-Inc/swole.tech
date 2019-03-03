import React, { Component } from 'react'
import Navigation from './Navigation';
import WorkoutList from './WorkoutList';
import { URL } from './index';


class Workout extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      isLoaded: false,
      error: null,
      workout: null
    };
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      var url = URL + "/workouts/" + this.props.match.params.id;
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              workout: result,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
  }

  render() {
    if (this.props.match.params.id) {
      return (
        <Navigation>
        { this.state.workout ? (
          <WorkoutList workout={this.state.workout} />
        ) : null}
        </Navigation>
      );
    } else {
      return (
        <Navigation>
          <WorkoutList />
        </Navigation>
      );

    }
  }
}

export default Workout;
