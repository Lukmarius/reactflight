import React, { Component } from "react";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Pagination Constructor");
  }

  render() {
    const { page, links } = this.props;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.setPage(links.prev.href)}
          className="btn btn-sm m-2 btn-light"
        >
          Previous
        </button>
        <span>
          | {page.number} / {page.totalPages} |
        </span>
        <button
          onClick={() => this.props.setPage(links.next.href)}
          className="btn btn-sm m-2 btn-light"
        >
          Next
        </button>
      </React.Fragment>
    );
  }
}
