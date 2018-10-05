import React, { Component } from "react";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class TaskList extends Component {
  state = {
    tasks: [
      { id: uuid(), name: "new navbar feature" },
      { id: uuid(), name: "new slides feature" },
      { id: uuid(), name: "new footer feature" }
    ]
  };
  render() {
    const { tasks } = this.state;
    return (
      <Container>
        <Button
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
        </Button>

        {/*display the added task */}
        <ListGroup>
          <TransitionGroup className="task_list">
            {tasks.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {name}
                  <Button
                    className="remove_btn"
                    color="danger"
                    size="md"
                    onClick={() => {
                      this.setState(state => ({
                        tasks: state.tasks.filter(task => task.id !== id)
                      }));
                    }}
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

export default TaskList;
