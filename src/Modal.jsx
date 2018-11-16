import React, { Component } from "react";
import "./modal.css";
import UniTable from "./UniTable";

export default class ModalTableClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      uri: props.uri
    };
    console.log("In Constructor");
    console.log(this.state.show);
  }
  preparedUri = "";

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updating!\n prevprops:");
    console.log(prevProps);
    console.log("prevState:");
    console.log(prevState);
    if (this.state.show === prevState.show) {
      this.setState({
        show: !prevState.show,
        uri: this.preparedUri
      });
    }
    console.log("new state:", this.state);
    console.log("-------------------");
  }

  componentWillUpdate(prevProps) {
    console.log("Component will update");
    console.log("new uri: " + prevProps.uri);
    this.preparedUri = prevProps.uri;
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  showHideClassName() {
    // console.log(this.state.show ? "modal display-block" : "modal display-none");
    return { display: this.state.show ? "block" : "none" };
  }

  renderTable() {
    if (this.state.show) {
      return <UniTable uri={this.state.uri} />;
    } else {
      return "Smth went wrong";
    }
  }

  render() {
    console.log("In modal - New state:");
    console.log(this.state.show ? "display: block;" : "display: none;");
    console.log(this.state.show);
    console.log("--------------------");
    return (
      <div className="modal" style={this.showHideClassName()}>
        <section className="modal-main">
          <div>{this.renderTable()}</div>
          <button onClick={this.hideModal} className="btn btn-sm m-2">
            close
          </button>
        </section>
      </div>
    );
  }
}
