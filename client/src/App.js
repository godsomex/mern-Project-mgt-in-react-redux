import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskNavbar from "./components/taskNavbar";
import TaskList from "./components/TaskList";
import { Container } from "reactstrap";
import TaskModal from "./components/taskModal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskNavbar />
        <Container>
          <TaskModal />
          <TaskList />
        </Container>
      </div>
    );
  }
}

export default App;
