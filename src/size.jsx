import React from "react";

const Size = props => {
  return (
    <React.Fragment>
      <span>Page size:</span>
      <span> | </span>
      <span onClick={() => props.setSize(10)}>10</span>
      <span> | </span>
      <span onClick={() => props.setSize(20)}>20</span>
      <span> | </span>
      <span onClick={() => props.setSize(50)}>50</span>
      <span> | </span>
    </React.Fragment>
  );
};

export default Size;
