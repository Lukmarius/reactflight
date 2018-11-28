import React, { Component } from "react";
import Size from "./size";
import Pagination from "./Pagination";

class Passengers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
      size: "&size=20"
    };
    this.setSize = this.setSize.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  setPage(link) {
    this.setState({ isLoaded: false });
    this.fetching(link);
  }

  setSize(newSize) {
    console.log("new size " + newSize);
    this.setState({ isLoaded: false, size: "&size=" + newSize });
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

  fetching = (
    uri = "http://localhost:8080/api/passengers?page=0" + this.state.size
  ) => {
    fetch(uri)
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result
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
      return <div>Loading...</div>;
    } else {
      let passengers = this.state.data._embedded.passengers;

      return (
        <React.Fragment>
          <Pagination
            setPage={this.setPage}
            page={this.state.data.page}
            links={this.state.data._links}
            isLoaded={this.state.isLoaded}
          />
          <Size
            setSize={this.setSize}
            page={this.state.data.page}
            isLoaded={this.state.isLoaded}
          />
          <table className="table table-sm">
            <thead>
              <tr>
                <th>First name </th>
                <th>Last name</th>
              </tr>
            </thead>
            <tbody>
              {passengers.map(pas => (
                <tr key={pas.firstname + pas.lastname}>
                  <td>{pas.firstname}</td>
                  <td>{pas.lastname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    }
  }
}

export default Passengers;
