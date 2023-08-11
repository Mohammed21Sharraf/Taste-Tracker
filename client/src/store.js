import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice.js";
import restaurantReducer from "./features/restaurant/restaurantSlice.js";
import reservationReducer from "./features/restaurant/reservationSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    restaurant: restaurantReducer,
    reservation: reservationReducer,
  },
});

export default store;
