import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create Restaurant - Restaurant Owner
export const createRestaurant = createAsyncThunk(
  "restaurant/createRestaurant",
  async (restaurantData) => {
    try {
      console.log(restaurantData);
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/restaurant/new",
        restaurantData,
        config
      );
      await data.restaurant;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  loading: true,
  restaurant: {},
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      // Create new Restaurant
      .addCase(createRestaurant.pending, (state) => {
        state.loading = true;
      })
      .addCase(createRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurant = action.payload;
      })
      .addCase(createRestaurant.rejected, (state) => {
        state.restaurant = null;
      });
  },
});

export default restaurantSlice.reducer;
