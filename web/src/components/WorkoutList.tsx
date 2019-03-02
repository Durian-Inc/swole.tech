import React, { Component } from 'react'
import Modal from 'react-modal';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

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
    }
  })

class WorkoutList extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      listName: "",
      items: this.props.items || ["bees", "oranges"],
      exercises: [],
      showModal: false,
      isLoaded: false,
      error: null,
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

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  makeWorkout = () => {
    var name = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const { items, listName } = this.state;
    console.log(name, listName, items);
  }

  handleChange = (event: any) => {
    this.setState({listName: event.target.value});
  }

  render() {
    const { classes } = this.props;
    return (
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
                        <button onClick={() => this.add(item.name)}>
                          {item.name}
                        </button>
                      </li>
                    )
                })
              ) : ( <div>nothing</div>)
              }
            </ul>
          </Modal>
        <ul className={classes.list}>
          {
            this.state.items.map((item: string, index: number) => 
              <li className={classes.listItem} key={index}>{item}</li>)
          }
        </ul>
        <button className={classes.createButton}
          onClick={this.makeWorkout}>Create</button>
      </div>
    );
  }
}

export default withStyles(styles)(WorkoutList)
