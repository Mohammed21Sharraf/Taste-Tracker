import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice.js";
import restaurantReducer from "./features/restaurant/restaurantSlice.js";
import reservationReducer from "./features/restaurant/reservationSlice.js";
import reviewReducer from "./features/restaurant/reviewSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    restaurant: restaurantReducer,
    reservation: reservationReducer,
    review: reviewReducer,
  },
});

export default store;
