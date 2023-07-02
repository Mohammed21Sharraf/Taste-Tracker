import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice.js";
import restaurantReducer from "./features/restaurant/restaurantSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    restaurant: restaurantReducer,
  },
});

export default store;
