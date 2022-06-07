import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import mockBookings from "../../../mocks/mockBookings";
import { server } from "../../../mocks/server";
import {
  deleteBookingActionCreator,
  loadBookingsActionCreator,
} from "../../features/bookingsSlice";

import { deleteBookingThunk, loadBookingsThunk } from "./bookingsThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers);
afterAll(() => server.close);

describe("Given a loadBookingsThunk", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with a loadBookings action", async () => {
      const dispatch: Dispatch = jest.fn();

      const payload = mockBookings;

      const loadBookingsAction = loadBookingsActionCreator(payload);

      const thunk = loadBookingsThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadBookingsAction);
    });
  });
});

describe("Given a deleteBookingThunk", () => {
  describe("When it is called with a valid id to delete", () => {
    test("Then it should call dispatch with a deleteBooking action", async () => {
      const dispatch: Dispatch = jest.fn();

      const payload = "bookingId";

      const deleteBookingAction = deleteBookingActionCreator(payload);
      axios.delete = jest.fn().mockResolvedValue({
        status: 200,
        data: {},
      });

      const thunk = deleteBookingThunk(payload);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(deleteBookingAction);
    });
  });
});
