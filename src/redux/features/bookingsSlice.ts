import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooking } from "../../types/types";

const initialState: IBooking[] = [];

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    loadBookings: (bookings, action: PayloadAction<IBooking[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadBookings: loadBookingsActionCreator } =
  bookingsSlice.actions;

export default bookingsSlice.reducer;
