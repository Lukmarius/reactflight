import React, { Component } from "react";
// import "./App.css";

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
      .then(res => res.json())
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
      let passengers = this.state.data._embedded.passengers;

      return (
        <table className="table table-sm">
          <thead>
            <th>First name </th>
            <th>Last name</th>
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
