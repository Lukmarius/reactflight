import React from "react";
import "./size.css";

const Size = props => {
  const sizes = [5, 10, 20, 50, 200, 4000];

  const createSizeButton = number => {
    if (number === props.page.size) {
      return (
        <button key={number} className="btn btn-sm m-2 btn-link">
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {" "}
            {number}
          </span>
        </button>
      );
    } else {
      return (
        <button
          key={number}
          onClick={() => props.setSize(number)}
          className="btn btn-sm m-2 btn-link"
        >
          <span>{number}</span>
        </button>
      );
    }
  };

  const createDisabledSizeButton = number => {
    return (
      <button key={number} className="btn btn-sm m-2 btn-link">
        <span> {number}</span>
      </button>
    );
  };

  const prepareViewOfSizeButtons = props => {
    if (props.isLoaded) {
      return (
        <span className="sizing">
          <span> Elements:</span>
          {sizes.map(number => {
            return createSizeButton(number);
          })}
        </span>
      );
    } else {
      return (
        <span className="sizing">
          <span> Elements:</span>
          {sizes.map(number => {
            return createDisabledSizeButton(number);
          })}
        </span>
      );
    }
  };

  return prepareViewOfSizeButtons(props);
};

export default Size;
