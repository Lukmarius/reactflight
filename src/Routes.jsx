import React, { Component } from "react";
import ModalButton from "./ModalButton";
import ModalTableClass from "./Modal";
import Size from "./size";
import Pagination from "./Pagination";
import AwesomeComponent from "./Spinner";
import "./routes.css";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},

      size: "&size=20",
      modal: false,
      uriModal: ""
    };
    this.showModal = this.showModal.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setPage = this.setPage.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  setPage(link) {
    this.setState({ isLoaded: false });
    this.fetching(link);
  }

  setSize(newSize) {
    console.log("new size " + newSize);
    this.setState({ isLoaded: false, size: "&size=" + newSize });
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
    this.fetching();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.size !== this.state.size) {
      console.log("fetching in ComponentDidUpdate routes");
      this.fetching();
    }
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

  fetching = (
    uri = "http://localhost:8080/api/routes?page=0" + this.state.size
  ) => {
    fetch(uri)
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
  };

  render() {
    if (!this.state.isLoaded) {
      console.log("Loading Routes");
      return (
        <React.Fragment>
          <Pagination
            isLoaded={this.state.isLoaded}
            setPage={this.setPage}
            page={this.state.data.page}
            links={this.state.data._links}
          />
          <Size isLoaded={this.state.isLoaded} />
          <div className="middle">
            <AwesomeComponent />
          </div>
        </React.Fragment>
      );
    } else {
      let routes = this.state.data._embedded.resources;

      console.log("Rendering routes: ......");
      return (
        <React.Fragment>
          {this.renderModal()}
          <Pagination
            isLoaded={this.state.isLoaded}
            setPage={this.setPage}
            page={this.state.data.page}
            links={this.state.data._links}
          />
          <Size
            setSize={this.setSize}
            page={this.state.data.page}
            isLoaded={this.state.isLoaded}
          />
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
