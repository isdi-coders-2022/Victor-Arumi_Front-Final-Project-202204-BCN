import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "../features/bookingsSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    bookings: bookingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
