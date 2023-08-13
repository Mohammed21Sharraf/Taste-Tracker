import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get daily Reservation
export const getDailyReviews = createAsyncThunk(
  "review/getDailyReviews",
  async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/dailyreviews",
        { withCredentials: true }
      );
      return await data.result;
    } catch (error) {
      throw new Error("Daily Reservations not loaded");
    }
  }
);

const initialState = {
  loading: true,
  review: {},
};

const reviewSlice = createSlice({
  name: "review",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      // Get Daily Reservayion
      .addCase(getDailyReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDailyReviews.fulfilled, (state, action) => {
        state.review = action.payload;
      })
      .addCase(getDailyReviews.rejected, (state) => {
        state.review = null;
      });
  },
});

export default reviewSlice.reducer;
