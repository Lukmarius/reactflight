import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.name = props.airport.id;
  }
  name = "";

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <button type="button" onClick={this.showModal} className="btn btn-sm m-2">
        {this.name}
      </button>
    );
  }
}

// ReactDOM.render(<Dashboard />, container);
