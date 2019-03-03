import React, { Component } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const Rect = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border: 1px lightgrey solid;
border-radius: 4px;
height: 60px;
width: 60px;
margin: 0 5px 0 4px;
padding: 2px 0px;
`
const Img = styled.img`
width: 40px;
height: 40px;
`

const StoriesHolderWrapper = styled.div`
height: 63px;
width: 100%;
max-width: 500px;
margin: auto;
margin-top: 5px;
padding: 4px 0px 4px 1px;
overflow: hidden;
`

const StoriesHolder = styled.div`
display: flex;
height: 80px;
width: 99%;
margin: auto;
overflow: auto;
overflow-y: hidden;
box-sizing: content-box;
`

const MyLink = styled(Link)`
text-decoration: none;
color: black;
`

class Story extends Component<any, any> {
  render() {
    var avatar;
    if('' == '')
      avatar = <Avatar aria-label="name" style={{background: '#64838e'}}>{this.props.workout.name.substring(0,1).toUpperCase()}</Avatar>;
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
      <StoriesHolderWrapper>
        <StoriesHolder>
          {this.state.stories.map((item: any) =>
            <Story workout={item} />)}
        </StoriesHolder>
      </StoriesHolderWrapper>
    );
  }
}

export default Stories;
