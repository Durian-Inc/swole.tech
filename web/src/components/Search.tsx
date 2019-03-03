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

function generate(element: any) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class Search extends Component {
  state = {
    value: ''
  };

  render() {
    var users = <List>
                  {generate(
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar style={{background: '#64838e'}}>
                          D
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Single-line item"
                      />
                      <ListItemSecondaryAction>
                        <Button variant="contained">
                          Add Friend
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>,
                  )}
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
