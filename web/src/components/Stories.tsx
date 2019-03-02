import React, { Component } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const Rect = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border: 1px blue solid;
border-radius: 10px;
height: 60px;
width: 60px;
margin: 0 4px;
`
const Img = styled.img`
width: 40px;
height: 40px;
`

const StoriesHolder = styled.div`
display: flex;
padding: 4px;
`

const MyLink = styled(Link)`
text-decoration: none;
`

class Story extends Component<any, any> {
  render() {
    var avatar;
    if('' == '')
      avatar = <Avatar aria-label="name">{this.props.workout.name.substring(0,1).toUpperCase()}</Avatar>;
    else
      avatar = <Avatar aria-label="name" src={''}></Avatar>;

    return (
      <MyLink to={"/workout/" + this.props.workout.id} >
        <Rect>
          {avatar}
          {this.props.workout.category}
        </Rect>
      </MyLink>
    )
  }
}

class Stories extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      stories: this.props.stories || []
    };
  }

  render() {
    return (
      <StoriesHolder>
        {this.state.stories.map((item: any) =>
          <Story workout={item} />)}
      </StoriesHolder>
    );
  }
}

export default Stories;
