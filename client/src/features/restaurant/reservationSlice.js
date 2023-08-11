import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get latest Reservations - restaurant Owner
export const getLatestReservations = createAsyncThunk(
  "reservation/getLatestReservation",
  async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/latestreservations",
        { withCredentials: true }
      );
      return await data.reservations;
    } catch (error) {
      throw new Error("Reservations not loaded");
    }
  }
);

// Get monthly Reservations
export const getMonthlyReservations = createAsyncThunk(
  "reservation/getMonthlyReservations",
  async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/monthlyreservations",
        { withCredentials: true }
      );
      return await data.group;
    } catch (error) {
      throw new Error("Monthly Reservations not loaded");
    }
  }
);

const initialState = {
  resLoading: true,
  reservations: {},
  monthlyReservation: {},
  monthlyLoading: true,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      // Get Latest Reservations
      .addCase(getLatestReservations.pending, (state) => {
        state.resLoading = true;
      })
      .addCase(getLatestReservations.fulfilled, (state, action) => {
        state.resLoading = false;
        state.reservations = action.payload;
      })
      .addCase(getLatestReservations.rejected, (state) => {
        state.reservations = null;
      })
      // Get Monthly Reservations
      .addCase(getMonthlyReservations.pending, (state) => {
        state.monthlyLoading = true;
      })
      .addCase(getMonthlyReservations.fulfilled, (state, action) => {
        state.monthlyLoading = false;
        state.monthlyReservation = action.payload;
      })
      .addCase(getMonthlyReservations.rejected, (state) => {
        state.monthlyReservation = null;
      });
  },
});

export default reservationSlice.reducer;
