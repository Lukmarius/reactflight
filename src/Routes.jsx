import React, { Component } from "react";
import ModalButton from "./ModalButton";
import ModalTableClass from "./Modal";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
      page: this.props.page,
      size: this.props.size,
      modal: false,
      uriModal: ""
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal(name) {
    this.setState({
      modal: true,
      uriModal: "http://0.0.0.0:8080/2api/airports/" + name
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
    //change size page
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      let routes = this.state.data._embedded.routes;

      console.log("------------------------- In routes:");
      console.log(this.state.modal);
      return (
        <React.Fragment>
          <ModalTableClass show={this.state.modal} uri={this.state.uriModal} />
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
