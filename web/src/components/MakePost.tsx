import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import TextField from '@material-ui/core/TextField';
import { URL } from './index';


class MakePost extends Component<any, any> {
  constructor(props: any) {
    super(props)
    
    this.state = {
      workout: null,
      isLoaded: false,
      error: null,
      redirect: false
    };
  }

  componentWillMount() {
    fetch(URL + "/workouts/" + this.props.match.params.workoutId)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            exercises: result.results,
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

  makeWorkout = () => {
    var name = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const data = {creator: name}
    console.log(data)
    fetch(URL + "/posts/", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => console.log(res))
    .catch(res => console.log(res))
    this.setState({
      redirect: true
    });
  }

  handleChange = (event: any) => {
    this.setState({listName: event.target.value});
  }

  update = (item: any, event: any) => {
    const { items } = this.state;
    var index = items.indexOf(item);
    items[index].meta = event.target.value;

    this.setState({
      items: items
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }

    return (
        <div>
          <input type="text"/>
          <TextField
            id="outlined-bare"
            placeholder="1 rep"
            margin="dense"
            variant="outlined"
          />

          <button>Create</button>
        </div>
    );
  }
}

export default MakePost
