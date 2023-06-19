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
      status: "Processing",
    },
    {
      userID: 2,
      name: "Tahsin Ashrafee",
      seatsBooked: 5,
      totalRes: 2,
      status: "Approved",
    },
    {
      userID: 3,
      name: "Tahsin Ashrafee",
      seatsBooked: 5,
      totalRes: 2,
      status: "Rejected",
    },
  ];

  const columns = [
    { field: "id", headerName: "User ID", width: 70 },

    {
      field: "name",
      headerName: "User Name",
      width: 230,
    },
    {
      field: "seatsBooked",
      headerName: "Seats Reserved",
      type: "number",
      width: 230,
    },

    {
      field: "totalRes",
      headerName: "Total Reservations",
      type: "number",
      width: 230,
    },
    {
      field: "status",
      headerName: "Status",
      width: 230,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

  const rows = [];

  options.forEach((item) => {
    rows.push({
      id: item.userID,
      seatsBooked: item.seatsBooked,
      totalRes: item.totalRes,
      name: item.name,
      status: item.status,
    });
  });

  return (
    <Fragment>
      {location.pathname === "/reservation" ? (
        <div className="datatable">
          <div className="datatableTitle">Reservation List</div>
          <DataGrid
            className="datagrid"
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
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
