import React, { Component } from "react";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import uuid from "uuid";
import { connect } from "react-redux";
import { getTaskAction, deleteTask } from "../store/actions/taskAction";
class TaskList extends Component {
  //   state = {
  //     tasks: [
  //       { id: uuid(), name: "new navbar feature" },
  //       { id: uuid(), name: "new slides feature" },
  //       { id: uuid(), name: "new footer feature" }
  //     ]
  //   };

  componentDidMount() {
    //console.log(this.props);
    this.props.getTaskAction();
  }

  onDeleteClick(id) {
    this.props.deleteTask(id);
  }

  render() {
    console.log(this.props);
    const { tasks } = this.props.addTask;
    return (
      <Container>
        {/* <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("enter task");
            if (name) {
              this.setState(state => ({
                tasks: [...state.tasks, { id: uuid(), name: name }]
              }));
            }
          }}
        >
          Add Task
        </Button> */}

        {/*display the added task */}
        <ListGroup>
          <TransitionGroup className="task_list">
            {tasks.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {name}
                  <Button
                    className="remove_btn"
                    color="danger"
                    size="md"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    addTask: state.newTask
  };
};
export default connect(
  mapStateToProps,
  { getTaskAction, deleteTask }
)(TaskList);
