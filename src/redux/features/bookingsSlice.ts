import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooking } from "../../types/types";

const initialState: IBooking[] = [];

const bookingsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getBookings: (bookings, action: PayloadAction<IBooking[]>) => [
      ...action.payload,
    ],
  },
});

export const { getBookings: getBookingsActionCreator } = bookingsSlice.actions;

export default bookingsSlice.reducer;
