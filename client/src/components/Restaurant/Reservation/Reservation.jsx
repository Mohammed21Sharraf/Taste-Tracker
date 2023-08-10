import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar/Sidebar";
import Navbar from "../layout/Navbar/Navbar";
import "./Reservation.scss";
import Datatable from "./Datatable/Datatable";
import axios from "axios";

const Reservation = () => {
  const [reservations, setReservations] = useState();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios
      .get("http://localhost:4000/api/v1/reservations/all", {
        withCredentials: true,
      })
      .then((res) => {
        setReservations(res.data.reservations);
      });
  };

  const handleUpdate = (id, resStatus) => {
    console.log(id, resStatus);
    axios
      .put(
        `http://localhost:4000/api/v1/reservations/update/${id}`,
        { resStatus },
        { withCredentials: true }
      )
      .then(() => {
        fetchdata();
      });
  };

  return (
    <Fragment>
      {reservations ? (
        <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <Datatable
              reservations={reservations && reservations}
              onUpdate={handleUpdate}
            />
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Fragment>
  );
};

export default Reservation;
