import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import * as api from "../../api"; 

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
)

// Update Restaurant profile 
// export const updateRestaurantProfile = createAsyncThunk(
//   "restaurant/updateProfile",
//   async ({id, updatedData, navigate}, {rejectWithValue}) => {
//     try {
//       const response = await api.updateProfile(updatedData, id);
//       navigate("/restaurant/profile");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// )

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
      // Update Restaurant Profile 
    //   .addCase(updateRestaurantProfile.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(updateRestaurantProfile.fulfilled, (state, action) => {
    //     state.loading = false;
    //     console.log("action",action);
    //     const {
    //       arg: {id},
    //     } = action.meta;
    //     if (id) {
    //       state.userRestaurant = state.userRestaurant.map((item) => {
    //         item._id === id ? action.payload : item
    //       });
    //     };
    //   })
    //   .addCase(updateRestaurantProfile.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.message;
    //   })
    }
});

export default restaurantSlice.reducer;
