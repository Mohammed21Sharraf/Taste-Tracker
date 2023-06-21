import React, { Fragment } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";

const Datatable = () => {
  const location = useLocation();
  let rows = [];
  let columns = [];

  if (location.pathname === "/reservation") {
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

    columns = [
      { field: "id", headerName: "User ID", width: 70 },

      {
        field: "name",
        headerName: "User Name",
        width: 250,
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
      {
        field: "action",
        headerName: "Action",
        width: 250,
        renderCell: (params) => {
          return (
            <div>
              {params.row.status === "Processing" ? (
                <div className="cellAction">
                  <div className="deleteButton">Reject</div>
                  <div className="approveButton">Approve</div>
                </div>
              ) : (
                <div className="cellAction">
                  <div className={`cellWithStatus ${params.row.status}`}>
                    Processed
                  </div>
                </div>
              )}
            </div>
          );
        },
      },
    ];

    options.forEach((item) => {
      rows.push({
        id: item.userID,
        seatsBooked: item.seatsBooked,
        totalRes: item.totalRes,
        name: item.name,
        status: item.status,
      });
    });
  }

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
