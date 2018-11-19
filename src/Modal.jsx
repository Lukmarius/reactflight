import React, { Component } from "react";
import "./modal.css";
import UniTable from "./UniTable";

export default class ModalTableClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: props.uri
    };
    console.log("Modal Constructor");
  }

  render() {
    console.log("rendering modal");
    return (
      <div className="modal" style={{ display: "block" }}>
        <section className="modal-main">
          <UniTable uri={this.state.uri} />
          <button onClick={this.props.hideModal} className="btn btn-sm m-2">
            close
          </button>
        </section>
      </div>
    );
  }
}
