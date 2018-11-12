// not in use...
import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const Tablep = props => {
  console.log("TABLEP: ");
  console.log(props.data);
  const columns = [
    {
      Header: "firstname",
      accessor: props.data._embedded.passengers.firstname, //tu ma być string, który jest w twoich danych
      width: 80
    },
    {
      Header: "lastname",
      accessor: props.data._embedded.passengers.lastname
    }
  ];
  const data = props.data;
  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        minRows={3}
        className="-striped -highlight"
      />
    </div>
  );
};

export default Tablep;
