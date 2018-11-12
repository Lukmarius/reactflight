import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Passengers from "./passengers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showTable() {
    ReactDOM.render(<Passengers />, document.getElementById("tables"));
  }

  render() {
    return (
      <div className="tablediv">
        <button onClick={this.showTable}>Show Table</button>
        <div id="tables" />
      </div>
    );
  }
}

export default App;
