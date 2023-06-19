import React, { Fragment } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";

const Datatable = () => {
  const location = useLocation();

  const options = [
    {
      userID: 1,
      name: "Tahsin Ashrafee",
      seatsBooked: 5,
      totalRes: 2,
    },
  ];

  const columns = [
    { field: "id", headerName: "User ID" },

    {
      field: "name",
      headerName: "User Name",
    },
    {
      field: "seatsBooked",
      headerName: "Seats Reserved",
      type: "number",
    },

    {
      field: "totalRes",
      headerName: "Total Reservations",
      type: "number",
    },
  ];

  const rows = [];

  options.forEach((item) => {
    rows.push({
      id: item.userID,
      seatsBooked: item.seatsBooked,
      totalRes: item.totalRes,
      name: item.name,
    });
  });

  return (
    <Fragment>
      {location.pathname === "/reservation" ? (
        <div className="datatable">
          <div className="datatableTitle">Reservation List</div>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="datagrid"
            autoHeight
          />
        </div>
      ) : (
        <div>Not okay</div>
      )}
    </Fragment>
  );
};

export default Datatable;
