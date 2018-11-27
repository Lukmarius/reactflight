import React, { Component } from "react";

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Pagination Constructor");
  }

  preparePageButtons = () => {
    const { page, links } = this.props;

    switch (page.number) {
      case 0:
        return (
          <React.Fragment>
            {this.prepareBtn(links.first.href, "First")}
            {this.prepareBtn("", "Previous", true)}
            {this.prepareInfoAboutPage(page.number, page.totalPages)}
            {this.prepareBtn(links.next.href, "Next")}
            {this.prepareBtn(links.last.href, "Last")}
          </React.Fragment>
        );

      case page.totalPages - 1:
        return (
          <React.Fragment>
            {this.prepareBtn(links.first.href, "First")}
            {this.prepareBtn(links.prev.href, "Previous")}
            {this.prepareInfoAboutPage(page.number, page.totalPages)}
            {this.prepareBtn("", "Next", true)}
            {this.prepareBtn(links.last.href, "Last")}
          </React.Fragment>
        );

      default:
        return (
          <React.Fragment>
            {this.prepareBtn(links.first.href, "First")}
            {this.prepareBtn(links.prev.href, "Previous")}
            {this.prepareInfoAboutPage(page.number, page.totalPages)}
            {this.prepareBtn(links.next.href, "Next")}
            {this.prepareBtn(links.last.href, "Last")}
          </React.Fragment>
        );
    }
  };

  prepareBtn = (link, text, disabled = false) => {
    return (
      <button
        onClick={() => this.props.setPage(link)}
        className="btn btn-sm m-2 btn-light"
        disabled={disabled}
      >
        {text}
      </button>
    );
  };

  prepareInfoAboutPage(currentPage, totalPages) {
    return (
      <span>
        | {currentPage + 1} / {totalPages} |
      </span>
    );
  }

  render() {
    if (this.props.isLoaded) {
      return this.preparePageButtons();
    } else {
      return (
        <React.Fragment>
          {this.prepareBtn("", "First", true)}
          {this.prepareBtn("", "Previous", true)}
          <span>| ---- / ---- |</span>
          {this.prepareBtn("", "Next", true)}
          {this.prepareBtn("", "Last", true)}
        </React.Fragment>
      );
    }
  }
}
