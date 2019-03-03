import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import TextField from '@material-ui/core/TextField';
import { URL } from './index';


class MakePost extends Component<any, any> {
  constructor(props: any) {
    super(props)
    
    this.state = {
      content: null,
      url: null,
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
    this.setState({
      [item]: event.target.value
    })
  }

  post = () => {
    const { url, content } = this.state;
    const { creator, id } = this.state.workout;
    window.alert(id);
    window.alert(url + content + creator);

    fetch(URL + "/workouts/" + id, {
      method: "PATCH"
    })
    .then(res => console.log(res))
    .catch(res => console.log(res))

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
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }

    return (
        <Navigation>
          <TextField
            id="outlined-bare"
            label="Image URL"
            onChange={(event: any) => this.update('url', event)}
            placeholder="https://google.com"
            margin="dense"
            variant="outlined"
          />
          <TextField
            label="Content"
            multiline
            onChange={(event: any) => this.update('content', event)}
            id="outlined-bare"
            placeholder="1 rep"
            margin="dense"
            variant="outlined"
          />

          <button onClick={this.post}>Create</button>
        </Navigation>
    );
  }
}

export default MakePost
