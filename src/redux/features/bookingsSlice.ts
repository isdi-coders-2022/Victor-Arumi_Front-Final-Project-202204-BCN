import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooking } from "../../types/types";

const initialState: IBooking[] = [];

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    loadBookings: (bookings, action: PayloadAction<IBooking[]>): IBooking[] => [
      ...action.payload,
    ],

    deleteBooking: (
      bookings: IBooking[],
      action: PayloadAction<string>
    ): IBooking[] =>
      bookings.filter((booking) => booking.id !== action.payload),

    createBooking: (
      bookings: IBooking[],
      action: PayloadAction<IBooking>
    ): IBooking[] => [...bookings, action.payload],
  },
});

export const {
  loadBookings: loadBookingsActionCreator,
  deleteBooking: deleteBookingActionCreator,
  createBooking: createBookingActionCreator,
} = bookingsSlice.actions;

export default bookingsSlice.reducer;
