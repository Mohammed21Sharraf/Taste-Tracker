import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create Restaurant - Restaurant Owner
export const createRestaurant = createAsyncThunk(
  "restaurant/createRestaurant",
  async (restaurantData, { rejectWithValue }) => {
    try {
      console.log(restaurantData);

      const { data } = await axios.post(
        "http://localhost:4000/api/v1/restaurant/new",
        restaurantData,
        { withCredentials: true }
      );
      await data.restaurant;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Get Restaurant Details - Restaurant Owner
export const getRestaurantDetails = createAsyncThunk(
  "restaurant/getRestaurantDetails",
  async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/restaurant/details",
        { withCredentials: true }
      );
      return await data.details;
    } catch (error) {
      throw new Error("Details not loaded");
    }
  }
);

const initialState = {
  loading: true,
  restaurant: {},
  userRestaurant: [],
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
      })
      // Get Restaurant Details
      .addCase(getRestaurantDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRestaurantDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurant = action.payload;
      })
      .addCase(getRestaurantDetails.rejected, (state) => {
        state.restaurant = null;
      });
  },
});

export default restaurantSlice.reducer;
