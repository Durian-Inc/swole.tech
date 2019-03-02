import React, { Component } from 'react'
import Modal from 'react-modal';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';


const styles = (theme: Theme) =>
  createStyles({
    container: {
      padding: 15
    },
    modalButton: {
      height: 40,
      width: '100%',
      background: 'skyblue'
    },
    createButton: {
      height: 40,
      width: '100%',
      background: 'skyblue'
    },
    list: {
      listStyleType: 'none',
      margin: 0,
      padding: 0
    },
    listItem: {
      color: 'green',
      height: 40,
      borderTop: '1px lightgray solid',
      borderBottom: '1px lightgray solid',
    },
    textField: {
      margin: 0,
      minWidth: 100,
      maxWidth: 100
    },
    itemText: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  })

class WorkoutList extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      listName: "",
      items: [],
      exercises: [],
      showModal: false,
      isLoaded: false,
      error: null,
      redirect: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    fetch("https://wger.de/api/v2/exercise/?language=2&limit=700")
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
          console.log("SUPER", error)
        }
      );

  }

  add (item: string) {
    const { items } = this.state;
    items.push(item);
    this.setState({
      items: items
    });
    this.handleCloseModal();
  }

  remove (item: string) {
    const { items } = this.state;
    var index = items.indexOf(item);
    items.splice(index, 1);
    this.setState({
      items: items
    });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  makeWorkout = () => {
    var name = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const { items, listName } = this.state;
    window.alert(JSON.stringify({name, listName, items}));
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
    items[index].count = event.target.value;

    this.setState({
      items: items
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    const { classes } = this.props;
    return (
      <Navigation>
        <div className={classes.container}>
          <input type="text" value={this.state.listName} onChange={this.handleChange} />
          <button
            className={classes.modalButton}
            onClick={this.handleOpenModal}
          >
            + Add Exercise
          </button>
            <Modal 
               isOpen={this.state.showModal}
               contentLabel="Select Exercise"
            >
              <button
                className={classes.modalButton}
                onClick={this.handleCloseModal}
              >
                Cancel
              </button>

              <ul className={classes.list}>
                { this.state.exercises ? (
                  this.state.exercises.map((item: any, index: number) => {
                    if (item.name.length > 0)
                      return (
                        <li className={classes.listItem} key={index}>
                          <button onClick={() => this.add(item)}>
                            {item.name}
                          </button>
                        </li>
                      )
                  })
                ) : ( <div>nothing</div>)
                }
              </ul>
            </Modal>

          <List dense={false}>
            {this.state.items.map((item: any) =>
              <ListItem>
                <TextField
                  id="outlined-bare"
                  className={classes.textField}
                  onChange={(event: any) => this.update(item, event)}
                  placeholder="1 rep"
                  margin="dense"
                  variant="outlined"
                />
                <ListItemText
                  primary={item.name}
                  className={classes.itemText}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => this.remove(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>,
            )}
          </List>

          <button className={classes.createButton}
            onClick={this.makeWorkout}>Create</button>
        </div>
      </Navigation>
    );
  }
}

export default withStyles(styles)(WorkoutList)
