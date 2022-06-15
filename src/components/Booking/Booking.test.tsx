import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";

import Booking from "./Booking";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a Booking component", () => {
  describe("When the user clicks on the button edit and the booking id is 629a19fe5a16e50d33d55cb3", () => {
    test("Then navigate should be called with route '/bookings/editBooking/629a19fe5a16e50d33d55cb3'", () => {});
    const editButtonTitle = "Editar reserva";
    const expectedCalledPath = "/bookings/editBooking/629a19fe5a16e50d33d55cb3";

    const mockBooking = {
      club: "RCTB",
      owner: "6299261c885d2211475ec5ec",
      date: "25/10/2022",
      hour: "17",
      courtType: "Outdoor",
      players: ["6299261c885d2211475ec5ec"],
      open: false,
      id: "629a19fe5a16e50d33d55cb3",
    };

    render(
      <Provider store={store}>
        <Booking booking={mockBooking} />
      </Provider>
    );

    const editButton = screen.getByTitle(editButtonTitle);

    userEvent.click(editButton);

    expect(mockUseNavigate).toHaveBeenCalledWith(expectedCalledPath);
  });
});
