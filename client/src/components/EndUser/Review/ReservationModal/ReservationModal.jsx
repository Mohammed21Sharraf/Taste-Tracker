import React, { Fragment, useState } from "react";
import "./ReservationModal.scss";
import { Modal, useMantineTheme } from "@mantine/core";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useParams } from "react-router-dom";

const ReservationModal = ({ modalOpen, setModalOpen }) => {
  const theme = useMantineTheme();
  const [selectdDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [seats, setSeats] = useState(1);
  const { id } = useParams();

  const handleReservation = () => {
    console.log(id);
  };

  return (
    <Fragment>
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <div>
          <h1>Please Select Date and Time</h1>
        </div>
        {/* Date Picker */}
        <div style={{ marginTop: "10px", paddingLeft: "75px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select a date"
              TextField={(...params) => <TextField {...params} />}
              value={selectdDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
            />
          </LocalizationProvider>
        </div>
        {/* Time Picker */}
        <div style={{ marginTop: "10px", paddingLeft: "75px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                label="Select a time"
                TextField={(...params) => <TextField {...params} />}
                value={selectedTime}
                onChange={(newValue) => {
                  setSelectedTime(newValue);
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        {/* Seat Capacity */}
        <div style={{ marginTop: "10px", paddingLeft: "77px" }}>
          <label>Reservation for: </label>
          <input
            type="number"
            min="1"
            max="30"
            required
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
        </div>
        <div style={{ paddingLeft: "150px" }}>
          <button
            className="reserve-button"
            type="submit"
            onClick={handleReservation}
          >
            Reserve
          </button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ReservationModal;
