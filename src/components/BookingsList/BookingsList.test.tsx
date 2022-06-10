import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockBookings from "../../mocks/mockBookings";
import store from "../../redux/store";
import BookingsList from "./BookingsList";

describe("Given a BookingsList component", () => {
  describe("When it receives an array with 2 bookings", () => {
    test("Then it should render 2 li elements", () => {
      const bookingsList = mockBookings;
      const expectedListItems = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <BookingsList bookings={bookingsList} />
          </Provider>
        </BrowserRouter>
      );

      const totalListItems = screen.getAllByRole("listitem");

      expect(totalListItems).toHaveLength(expectedListItems);
    });
  });
});
