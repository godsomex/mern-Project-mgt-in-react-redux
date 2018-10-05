import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskNavbar from "./components/taskNavbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskNavbar />
      </div>
    );
  }
}

export default App;
