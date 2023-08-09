import React from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableHome = ({ reservations }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Customer ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Seats Reserved</TableCell>
            <TableCell className="tableCell">Time</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Reservation Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations &&
            reservations.map((entry) => (
              <TableRow key={entry._id}>
                <TableCell className="tableCell">{entry.user._id}</TableCell>
                <TableCell className="tableCell">{entry.user.name}</TableCell>
                <TableCell className="tableCell">
                  {entry.seatCapacity}
                </TableCell>
                <TableCell className="tableCell">{entry.time}</TableCell>
                <TableCell className="tableCell">{entry.date}</TableCell>
                <TableCell className="tableCell">
                  <span className={`reservationStatus ${entry.status}`}>
                    {entry.status}
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
