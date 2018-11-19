import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import Passengers from "./Passengers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: <span>Choose table</span>
    };
  }

  render() {
    console.log("rendering App");
    return (
      <div className="tablediv">
        <div id="mod" />
        <button
          className="btn btn-sm m-2"
          onClick={() =>
            this.setState({
              table: <Passengers />
            })
          }
        >
          Show Passengers
        </button>
        <button
          className="btn btn-sm m-2"
          onClick={() =>
            this.setState({
              table: <Routes />
            })
          }
        >
          Show Routes
        </button>
        <div id="tables"> {this.state.table} </div>
      </div>
    );
  }
}

export default App;
