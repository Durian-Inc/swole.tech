import React, { Component } from 'react'
import Modal from 'react-modal';

class WorkoutList extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      items: ["bees", "trees"],
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

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
          <Modal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <ul>
              { this.state.exercises ? (
                this.state.exercises.map((item: any, index: number) => {
                  if (item.name.length > 0)
                    return (<li key={index}><button onClick={() => this.add(item.name)}>{item.name}</button></li>)
                })
              ) : ( <div>nothing</div>)
              }
            </ul>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </Modal>
        <ul>
          {
            this.state.items.map((item: string, index: number) => <li key={index}>{item}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default WorkoutList
