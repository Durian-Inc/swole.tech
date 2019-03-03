import React, { Component } from 'react';
import Post from './Post';
import Avatar from '@material-ui/core/Avatar';

class Feed extends Component<any, any> {
  render() {
    const { posts } = this.props;
    
    return (
      <div style={{marginBottom: '65px'}}>
      { posts.map((data: any) => {
      var photo = "";
      var caption = "";
      if (data.photo)
        photo = data.photo;
      if (data.caption)
        caption = data.caption;

      return <Post
        key={data.id}
        avatar=''
        name={data.name}
        date={data.date}
        workoutImage={photo}
        workoutDescription={data.caption}
        workoutIcon={require('../static/workout.png')}
        workoutName={data.category}
        workoutTime='1:20:47'
        workoutLink={'/workout/' + data.original_workout.id}
      />
      })}
      </div>
    );
  }
}

export default Feed;
