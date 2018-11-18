import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import Passengers from "./Passengers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: <span>Choose table</span>,
      page: 0,
      size: 20
    };
  }

  // showTable(comp) {
  //   this.setState({ table: comp });
  // }

  setPage(newPage) {
    this.setState({ page: newPage });
  }

  setSize(newSize) {
    this.setState({ size: newSize });
  }

  render() {
    return (
      <div className="tablediv">
        <div id="mod" />
        <button
          className="btn btn-sm m-2"
          onClick={() =>
            this.setState({
              table: (
                <Passengers page={this.state.page} size={this.state.size} />
              )
            })
          }
        >
          Show Passengers
        </button>
        <button
          className="btn btn-sm m-2"
          onClick={() =>
            this.setState({
              table: <Routes page={this.state.page} size={this.state.size} />
            })
          }
        >
          Show Routes
        </button>
        <div id="tables">{this.state.table}</div>
      </div>
    );
  }
}

export default App;
