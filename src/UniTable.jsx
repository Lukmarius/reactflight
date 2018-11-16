import React, { Component } from "react";

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
          this.setState({
            isLoaded: true,
            data: result
          });
        },

        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );
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
      console.log("loading uniTable.....");
      return <div>Loading...</div>;
    } else {
      let endpointList = this.uri.split("/");
      let objects;
      let headers;

      console.log("in uniTable, endpoints list: " + endpointList);
      if (endpointList.length < 6) {
        let name = endpointList[endpointList.length - 1];
        objects = this.state.data._embedded[name];
        headers = objects[0];
        console.log("in UniTable ", objects);
      } else {
        objects = [this.state.data];
        headers = objects[0];
        console.log("in UniTable ", objects);
      }

      let i = 0;
      let j = 0;
      return (
        <table className="table table-sm">
          <thead>
            <tr>
              {Object.keys(headers).map(key => (
                <th key={i++}>{this.checkKey(key)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {objects.map(obj => (
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
