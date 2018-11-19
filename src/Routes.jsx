import React, { Component } from "react";
import ModalButton from "./ModalButton";
import ModalTableClass from "./Modal";
import Size from "./size";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
      page: 0,
      size: 20,
      modal: false,
      uriModal: ""
    };
    this.showModal = this.showModal.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setPage = this.setPage.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  setPage(newPage) {
    this.setState({ page: newPage });
  }

  setSize(newSize) {
    console.log("new size " + newSize);
    this.setState({ isLoaded: false, size: newSize });
  }

  showModal(name) {
    this.setState({
      modal: true,
      uriModal: "http://0.0.0.0:8080/2api/airports/" + name
    });
  }

  hideModal() {
    this.setState({
      modal: false
    });
  }

  componentDidMount() {
    fetch(
      `http://localhost:8080/api/routes?page=${this.state.page}&size=${
        this.state.size
      }`
    )
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result,
            modal: false
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentDidUpdate() {
    //change size / page
    console.log("UPDATED TABLE ROUTES");
    console.log("....................");
  }

  componentWillUpdate() {
    console.log("WILL UPDATE ROUTES");
  }

  renderModal() {
    if (this.state.modal) {
      console.log("rendering modal");
      return (
        <ModalTableClass hideModal={this.hideModal} uri={this.state.uriModal} />
      );
    } else {
      console.log("not showing modal");
      return null;
    }
  }

  render() {
    if (!this.state.isLoaded) {
      console.log("Loading Routes");
      return <div>Loading...</div>;
    } else {
      let routes = this.state.data._embedded.routes;

      console.log("Rendering routes: ......");
      console.log("Modal show: " + this.state.modal);
      return (
        <React.Fragment>
          <Size setSize={this.setSize} setPage={this.setPage} />
          {this.renderModal()}
          <table className="table table-sm">
            <thead>
              <tr>
                <th>From</th>
                <th>Destination</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              {routes.map(route => (
                <tr key={route.fromAirport + route.destinationAirport}>
                  <td>
                    <ModalButton
                      airport={{ id: route.fromAirport }}
                      showModal={this.showModal}
                    />
                  </td>
                  <td>
                    <ModalButton
                      airport={{ id: route.destinationAirport }}
                      showModal={this.showModal}
                    />
                  </td>
                  <td>{route.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    }
  }
}

export default Routes;
