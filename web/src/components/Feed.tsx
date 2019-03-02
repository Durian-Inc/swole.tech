import React, { Component } from 'react';
import Post from './Post';

class Feed extends Component {
  render() {
    return (
      <div style={{marginBottom: '65px'}}>
        <Post
          avatar={require('../static/workout.png')}
          name='David Gardiner'
          date='September 14, 2016'
          workoutImage={require('../static/test.jpg')}
          workoutDescription='Woo, that was a tough one!'
          workoutIcon={require('../static/workout.png')}
          workoutName='Upper Body'
          workoutTime='1:20:47'
        />
        <Post
          avatar=''
          name='Clay McGinnis'
          date='March 1, 2019'
          workoutImage=''
          workoutDescription=''
          workoutIcon={require('../static/workout.png')}
          workoutName='Upper Body'
          workoutTime='1:20:47'
        />
        <Post
          avatar={require('../static/workout.png')}
          name='David Gardiner'
          date='September 14, 2016'
          workoutImage={require('../static/test.jpg')}
          workoutDescription='Woo, that was a tough one!'
          workoutIcon={require('../static/workout.png')}
          workoutName='Upper Body'
          workoutTime='1:20:47'
        />
        <Post
          avatar=''
          name='Clay McGinnis'
          date='March 1, 2019'
          workoutImage=''
          workoutDescription=''
          workoutIcon={require('../static/workout.png')}
          workoutName='Upper Body'
          workoutTime='1:20:47'
        />
      </div>
    );
  }
}

export default Feed;