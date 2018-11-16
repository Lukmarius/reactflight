import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import UniTable from "./UniTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { table: <span>Choose table</span> };
  }

  showTable(comp) {
    this.setState({ table: comp });
  }

  render() {
    return (
      <div className="tablediv">
        <div id="mod" />
        <button
          className="btn btn-sm m-2"
          onClick={() =>
            this.setState({
              table: <UniTable uri={"http://localhost:8080/api/passengers"} />
            })
          }
        >
          Show Passengers
        </button>
        <button
          className="btn btn-sm m-2"
          onClick={() => this.setState({ table: <Routes /> })}
        >
          Show Routes
        </button>
        <div id="tables">{this.state.table}</div>
      </div>
    );
  }
}

export default App;
