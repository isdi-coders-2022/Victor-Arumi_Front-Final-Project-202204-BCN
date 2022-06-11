import mockBookings from "../../mocks/mockBookings";
import bookingReducer, {
  getBookingAndPlayersActionCreator,
} from "./bookingSlice";

const initialBookingState = {
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

describe("Given a userSlice reducer", () => {
  describe("When it receives an initial state and a register action with valid new user data", () => {
    test("Then it should return the new state with the username provided in user data", () => {
      const payload = {
        booking: mockBookings[0],
        playersUsernames: ["john", "mike", "jake", "tyler"],
      };

      const expectedNewBookingState = {
        ...payload,
      };

      const getBookingAndPlayersAction =
        getBookingAndPlayersActionCreator(payload);

      const newBookingState = bookingReducer(
        initialBookingState,
        getBookingAndPlayersAction
      );

      expect(newBookingState).toEqual(expectedNewBookingState);
    });
  });
});
