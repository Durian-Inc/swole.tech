import React, { Component } from 'react';
import Post from './Post';
import Stories from './Stories';

class Feed extends Component {
  render() {
    return (
      <div>
      <Stories stories={[{name: "Tom", id: 1, category:"legs"}, {name: "Steve", id: 2, category:"arms"}]} />
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
      </div>
    );
  }
}

export default Feed;
