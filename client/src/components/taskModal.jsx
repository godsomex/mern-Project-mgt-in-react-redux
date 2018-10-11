import React, { Component } from "react";
import { connect } from "react-redux";
// import uuid from "uuid";
import { addTaskAction } from "../store/actions/taskAction";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class TaskModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      //   id: uuid(),
      name: this.state.name
    };

    // add task via addTask action imported on top
    this.props.addTaskAction(newTask);

    //close the modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Add Task
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Task</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="task">Task</Label>
                <Input
                  type="text"
                  name="name"
                  id="task"
                  placeholder="enter project task"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button color="primary" block>
                Add Task
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapStateToprops = state => {
  console.log(state);
  return {
    task: state.task
  };
};
export default connect(
  mapStateToprops,
  { addTaskAction }
)(TaskModal);
