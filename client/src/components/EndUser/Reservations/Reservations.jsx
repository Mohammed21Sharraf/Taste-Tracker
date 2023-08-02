import React, { Fragment, useEffect, useState } from "react";
import UserNavbar from "../layout/UserNavbar/UserNavbar";
import "./Reservations.scss";
import axios from "axios";

const Reservations = () => {
  const [updateUI, setUpdateUi] = useState();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/reservations/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setReservations(res.data.reservations);
      });
  }, [updateUI]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/reservation/delete/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          setReservations((prevItems) =>
            prevItems.filter((item) => item._id !== id)
          );
        }
      });
  };

  return (
    <Fragment>
      <UserNavbar />
      <div className="reservation-page">
        <h1>Your Reservations</h1>
        <table className="reservation-table">
          <thead>
            <tr>
              <th className="white-text">Reservation ID</th>
              <th className="white-text">Restaurant name</th>
              <th className="white-text">Date</th>
              <th className="white-text">Time</th>
              <th className="white-text">Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody setUpdateUi={setUpdateUi}>
            {reservations &&
              reservations.map((reservation) => (
                <tr key={reservation._id}>
                  <td>{reservation._id}</td>
                  <td>{reservation.restaurantName}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.time}</td>
                  <td>{reservation.status}</td>
                  <td>
                    <button
                      className="reservation-delete-btn white-text"
                      onClick={() => handleDelete(reservation._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Reservations;
