import React from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableHome = () => {
  const rows = [
    {
      id: 1,
      name: "Tashsin Ashrafee",
      comment: "Best Restaurant",
      rating: 5,
      reservation: 2,
      reservationStatus: "Processing",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Customer ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Comment</TableCell>
            <TableCell className="tableCell">Rating</TableCell>
            <TableCell className="tableCell">Reservations</TableCell>
            <TableCell className="tableCell">Reservation Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.comment}</TableCell>
              <TableCell className="tableCell">{row.rating}</TableCell>
              <TableCell className="tableCell">{row.reservation}</TableCell>
              <TableCell className="tableCell">
                <span className={`reservationStatus ${row.reservationStatus}`}>
                  {row.reservationStatus}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableHome;
