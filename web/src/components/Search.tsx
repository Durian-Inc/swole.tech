import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Navigation from './Navigation';
import { URL } from './index';

class Search extends Component {
  state = {
    value: '',
    users: [],
    isLoaded: false,
    error: null
  };

  addFriend = (them: string) => {
    var name = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log("post", name, them)

    const data = {friend: them}
    fetch(URL + "/profile/" + name + "/friends", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then((result) => console.log(result))

    //item.name remove
    /*const { items } = this.state;
    var index = items.indexOf(item);
    items.splice(index, 1);
    this.setState({
      items: items
    });*/

  }

  componentDidMount() {
    fetch(URL + "/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result,
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


  render() {
    console.log(this.state.users)
    var users = <List>
                  {this.state.users ? (
                    this.state.users.map((item: any, index: number) => 
                      <ListItem key={index}>
                        <ListItemAvatar>
                          <Avatar style={{background: '#64838e'}}>
                            {item.name.substring(0,1).toUpperCase()}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.name}
                        />
                        <ListItemSecondaryAction>
                          <Button
                            onClick={() => this.addFriend(item.name)}
                            variant="contained"
                          >
                            Add Friend
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )
                  ) : null}
                </List>

    return (
      <div>
        <Navigation>
          <div style={{width: '95%', maxWidth: '500px', margin: 'auto', marginTop: '10px'}}>
            <SearchBar
              value={this.state.value}
              onChange={(newValue) => this.setState({ value: newValue })}
              onRequestSearch={() => alert(this.state.value)}
            />
          {users}
          </div>
        </Navigation>
      </div>
    );
  }
}

export default Search;
