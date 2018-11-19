import React from "react";

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
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Size;
