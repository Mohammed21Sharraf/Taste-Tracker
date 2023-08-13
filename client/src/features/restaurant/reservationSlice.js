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

// Get daily Reservation
export const getDailyReservation = createAsyncThunk(
  "reservation/getDailyReservations",
  async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1//reservation/daily",
        { withCredentials: true }
      );
      return await data.result;
    } catch (error) {
      throw new Error("Daily Reservations not loaded");
    }
  }
);

const initialState = {
  resLoading: true,
  reservations: {},
  monthlyReservation: {},
  monthlyLoading: true,
  dailyReservation: {},
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
      })
      // Get Daily Reservayion
      .addCase(getDailyReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDailyReservation.fulfilled, (state, action) => {
        state.dailyReservation = action.payload;
      })
      .addCase(getDailyReservation.rejected, (state) => {
        state.dailyReservation = null;
      });
  },
});

export default reservationSlice.reducer;
