import React, { Fragment } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const Datatable = ({ reservations, onUpdate }) => {
  let rows = [];
  let columns = [];

  columns = [
    { field: "id", headerName: "Reservation ID", width: 250 },

    {
      field: "name",
      headerName: "User Name",
      width: 200,
    },
    {
      field: "seatsBooked",
      headerName: "Seats Reserved",
      type: "number",
      width: 150,
    },

    {
      field: "time",
      headerName: "Time",
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
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
                <div
                  className="deleteButton"
                  onClick={() => onUpdate(params.row.id, "Rejected")}
                >
                  Reject
                </div>
                <div
                  className="approveButton"
                  onClick={() => onUpdate(params.row.id, "Approved")}
                >
                  Approve
                </div>
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

  reservations.forEach((reservation) => {
    rows.push({
      id: reservation._id,
      name: reservation.user.name,
      seatsBooked: reservation.seatCapacity,
      time: reservation.time,
      date: reservation.date,
      status: reservation.status,
    });
  });

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Datatable;
