import mockBookings from "../../mocks/mockBookings";
import { IBooking } from "../../types/types";
import bookingsReducer, {
  deleteBookingActionCreator,
  loadBookingsActionCreator,
} from "./bookingsSlice";

const initialBookingsState: IBooking[] = [];

describe("Given a bookingsSlice reducer", () => {
  describe("When it receives an initial state and a getBookings action", () => {
    test("Then it should return the new state with a list of bookings", () => {
      const payload = mockBookings;

      const expectedNewBookings = mockBookings;

      const loadBookingsAction = loadBookingsActionCreator(payload);
      const newBookingsState = bookingsReducer(
        initialBookingsState,
        loadBookingsAction
      );

      expect(newBookingsState).toEqual(expectedNewBookings);
    });
  });

  describe("When it receives an initial state and a deleteBooking action with an existing booking id", () => {
    test("Then it should return the new state with a list of bookings without the booking of the id provided", () => {
      const payload = mockBookings[1].id;

      const expectedNewBookings = [mockBookings[0]];

      const deleteBookingAction = deleteBookingActionCreator(payload);
      const newBookingsState = bookingsReducer(
        mockBookings,
        deleteBookingAction
      );

      expect(newBookingsState).toEqual(expectedNewBookings);
    });
  });
});
