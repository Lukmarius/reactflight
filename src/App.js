import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Passengers from "./passengers";
import Routes from "./routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showTable(comp) {
    ReactDOM.render(comp, document.getElementById("tables"));
  }

  render() {
    return (
      <div className="tablediv">
        <button
          className="btn btn-sm m-2"
          onClick={() => this.showTable(<Passengers />)}
        >
          Show Passengers
        </button>
        <button
          className="btn btn-sm m-2"
          onClick={() => this.showTable(<Routes />)}
        >
          Show Routes
        </button>
        <div id="tables" />
      </div>
    );
  }
}

export default App;
