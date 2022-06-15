import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import mockBookings from "../../../mocks/mockBookings";
import { server } from "../../../mocks/server";
import {
  deleteBookingActionCreator,
  loadBookingsActionCreator,
} from "../../features/bookingsSlice";

import {
  addUserToBookingPlayersThunk,
  createBookingThunk,
  deleteBookingThunk,
  editBookingThunk,
  loadBookingsThunk,
} from "./bookingsThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers);
afterAll(() => server.close);

describe("Given a loadBookingsThunk", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with a loadBookings action", async () => {
      const dispatch: Dispatch = jest.fn();

      const payload = mockBookings;

      const loadBookingsAction = loadBookingsActionCreator(payload);

      axios.get = jest.fn().mockResolvedValue({
        status: 200,
        data: { bookings: mockBookings },
      });

      const thunk = loadBookingsThunk(
        2,
        1,
        "type",
        "status",
        "date",
        "id",
        "owner"
      );

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

describe("Given a CreateBookingThunk", () => {
  describe("When it is called with a valid bookingFormData", () => {
    test("Then it should call dispatch with a createBooking action", async () => {
      const dispatch: Dispatch = jest.fn();

      const createdBooking = mockBookings[0];

      axios.post = jest.fn().mockResolvedValue({
        data: { createdBookings: createdBooking },
      });

      const thunk = createBookingThunk(createdBooking);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a EditBookingThunk", () => {
  describe("When it is called with valid edited bookingFormData", () => {
    test("Then it should call dispatch with a createBooking action", async () => {
      const dispatch: Dispatch = jest.fn();

      const createdBooking = mockBookings[0];

      axios.put = jest.fn().mockResolvedValue({
        data: { createdBookings: createdBooking },
      });

      const thunk = editBookingThunk(createdBooking, createdBooking.id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a addUserToBookingPlayersThunk function", () => {
  describe("When it is called with an array of 3 players and the last is not repeated", () => {
    test("Then it should call dispatch", async () => {
      const dispatch: Dispatch = jest.fn();
      const bookingId = "testID";
      const playersArray = ["player1", "player2", "player3"];

      axios.put = jest.fn().mockResolvedValue({
        data: {},
      });

      const thunk = addUserToBookingPlayersThunk(bookingId, playersArray);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is called with an array of 3 players and the last one is repeated", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch: Dispatch = jest.fn();
      const bookingId = "testID";
      const playersArray = ["playerRepeated", "player2", "playerRepeated"];

      axios.put = jest.fn().mockResolvedValue({
        data: {},
      });

      const thunk = addUserToBookingPlayersThunk(bookingId, playersArray);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
