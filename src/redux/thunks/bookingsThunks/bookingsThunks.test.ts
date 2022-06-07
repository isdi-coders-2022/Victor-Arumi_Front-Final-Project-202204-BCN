import { Dispatch } from "@reduxjs/toolkit";
import mockBookings from "../../../mocks/mockBookings";
import { server } from "../../../mocks/server";
import { loadBookingsActionCreator } from "../../features/bookingsSlice";

import { loadBookingsThunk } from "./bookingsThunks";

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
