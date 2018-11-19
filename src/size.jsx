import React from "react";
import "./size.css";

const Size = props => {
  const sizes = [5, 10, 20, 50, 200];

  const checkCurrentPage = number => {
    if (number === props.page.size) {
      return (
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {" "}
          {number}
        </span>
      );
    } else {
      return <span>{number}</span>;
    }
  };

  return (
    <span className="sizing">
      <span> Elements:</span>
      {sizes.map(number => {
        return (
          <button
            key={number}
            onClick={() => props.setSize(number)}
            className="btn btn-sm m-2 btn-link"
          >
            {checkCurrentPage(number)} |
          </button>
        );
      })}
    </span>
  );
};

export default Size;
