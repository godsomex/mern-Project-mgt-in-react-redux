import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskNavbar from "./components/taskNavbar";
import TaskList from "./components/TaskList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskNavbar />
        <TaskList />
      </div>
    );
  }
}

export default App;
