import React, { Component } from "react";
// import "./App.css";

class UniTable extends Component {
  uri = "";
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {}
    };
    this.uri = props.uri;
  }

  componentDidMount() {
    fetch(this.uri)
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

  checkKey(key) {
    if (key !== "_links") {
      return key;
    }
  }

  checkValue(obj, key) {
    if (key !== "_links") {
      return obj[key];
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      let endpointList = this.uri.split("/");
      let name = endpointList[endpointList.length - 1];
      let list = this.state.data._embedded[name];
      console.log("LIST:");
      console.log(list);

      let i = 0;
      let j = 0;
      return (
        <table className="table table-sm">
          <thead>
            <tr>
              {Object.keys(list[0]).map(key => (
                <th key={i++}>{this.checkKey(key)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map(obj => (
              <tr key={i++}>
                {Object.keys(obj).map(key => (
                  <td key={j++}>{this.checkValue(obj, key)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default UniTable;
