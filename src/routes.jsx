import React, { Component } from "react";
import UniTable from "./uniTable";
import Dashboard from "./Dashboard";
// import "./App.css";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/routes")
      .then(response => response.json())
      .then(
        result => {
          console.log("DATA: ");
          console.log(result);
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
      )
      .then(() => console.log(this.state.data));
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      let routes = this.state.data._embedded.routes;

      return (
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
                  <Dashboard airport={{ id: route.fromAirport }} />
                </td>
                <td>
                  <Dashboard airport={{ id: route.destinationAirport }} />
                </td>
                <td>{route.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default Routes;
