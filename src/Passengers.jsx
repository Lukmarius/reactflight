import React, { Component } from "react";

class Passengers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/passengers")
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
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      let passengers = this.state.data._embedded.passengers;

      return (
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
      );
    }
  }
}

export default Passengers;
