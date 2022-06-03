import mockBookings from "../../mocks/mockBookings";
import { IBooking } from "../../types/types";
import bookingsReducer, { getBookingsActionCreator } from "./bookingsSlice";

const initialBookingsState: IBooking[] = [];

describe("Given a bookingsSlice reducer", () => {
  describe("When it receives an initial state and a getBookings action", () => {
    test("Then it should return the new state with a list of bookings", () => {
      const payload = mockBookings;

      const expectedNewBookings = mockBookings;

      const registerAction = getBookingsActionCreator(payload);
      const newBookingsState = bookingsReducer(
        initialBookingsState,
        registerAction
      );

      expect(newBookingsState).toEqual(expectedNewBookings);
    });
  });
});
