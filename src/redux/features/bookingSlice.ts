import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingSliceState } from "../../types/types";

const initialState: BookingSliceState = {
  booking: {
    id: "",
    owner: "",
    club: "",
    date: "",
    hour: "",
    courtType: "",
    players: [],
    open: true,
  },
  playersUsernames: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    getBookingAndPlayers: (
      bookingState: BookingSliceState,
      action: PayloadAction<BookingSliceState>
    ): BookingSliceState => ({ ...action.payload }),
  },
});

export const { getBookingAndPlayers: getBookingAndPlayersActionCreator } =
  bookingSlice.actions;

export default bookingSlice.reducer;
