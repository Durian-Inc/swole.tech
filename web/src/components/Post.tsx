import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const WorkoutImage = styled.img`
  width: 50px;
  height: 50px;
  float: left;
  margin: 0px 15px 15px 0px;
`

interface IProps {
  avatar: any,
  name: string,
  date: string,
  workoutImage: any,
  workoutDescription: string,
  workoutIcon: any,
  workoutName: string,
  workoutTime: string
}

class Post extends Component<IProps, {}> {
  render() {
    var avatar, workoutImage, workoutDescription
    if(this.props.avatar == '')
      avatar = <Avatar aria-label="name">{this.props.name.substring(0,1).toUpperCase()}</Avatar>
    else
      avatar = <Avatar aria-label="name" src={this.props.avatar}></Avatar>;

    if(this.props.workoutImage == '')
      workoutImage = ''
    else
      workoutImage = <CardMedia
                      style={{
                        height: 0,
                        paddingTop: '100%'
                      }}
                      image={this.props.workoutImage}
                      title="Workout Image"
                    />

    if(this.props.workoutDescription == '')
      workoutDescription = ''
    else
      workoutDescription = <CardContent>
                            <Typography component="p">
                              {this.props.workoutDescription}
                            </Typography>
                          </CardContent>

    return (
      <Card
        style={{
          textAlign: 'left',
          margin: 'auto',
          marginTop: '10px',
          width: '95%',
          maxWidth: '500px'
        }}
      >
        <CardHeader
          avatar={
            avatar
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.name}
          subheader={this.props.date}
        />
        {workoutImage}
        {workoutDescription}
        <CardContent
          style={{
            borderTop: '1px solid lightgrey'
          }}
        >
          <WorkoutImage src={this.props.workoutIcon} />
          <a href='google.com' style={{textDecoration: 'none'}}>
            <Typography style={{fontWeight: 'bold'}} component="p">
              {this.props.workoutName}
            </Typography>
            <Typography component="p">
              Completion Time - {this.props.workoutTime}
            </Typography>
          </a>
        </CardContent>
      </Card>
    );
  }
}

export default Post;