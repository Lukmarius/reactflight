import React, { Component } from "react";

export default class ModalButton extends Component {
  constructor(props) {
    super(props);
    // this.state = { show: false };
    this.name = props.airport.id;
    this.openModal = props.showModal;
  }
  name = "";

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          onClick={() => this.openModal(this.name)}
          className="btn btn-sm m-2"
        >
          {this.name}
        </button>
      </React.Fragment>
    );
  }
}
