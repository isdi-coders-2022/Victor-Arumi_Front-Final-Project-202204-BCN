import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";
import BookingForm from "./CreateBookingForm";
import mockBookings from "../../mocks/mockBookings";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a CreateBooking component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 5 selects and 3 buttons", () => {
      const totalButtons = 3;
      const totalSelects = 5;

      render(
        <Provider store={store}>
          <BookingForm booking={mockBookings[0]} usernames={[]} />
        </Provider>
      );

      const selects: HTMLElement[] = screen.getAllByRole("combobox");

      const buttons: HTMLElement[] = screen.getAllByRole("button");

      expect(selects).toHaveLength(totalSelects);
      expect(buttons).toHaveLength(totalButtons);
    });
  });

  describe("When invoked and the user clicks on 'Crear reserva' button", () => {
    test("Then it should call dispatch", () => {
      const CreateBookingButtonText = "Editar reserva";

      const indoorButtonText = "Indoor";
      const outdoorButtonText = "Outdoor";

      render(
        <Provider store={store}>
          <BookingForm booking={mockBookings[0]} usernames={[]} />
        </Provider>
      );

      const loginButton = screen.getByRole("button", {
        name: CreateBookingButtonText,
      });
      const indoorButton = screen.getByRole("button", {
        name: indoorButtonText,
      });
      const outdoorButton = screen.getByRole("button", {
        name: outdoorButtonText,
      });

      userEvent.click(loginButton);
      userEvent.click(indoorButton);
      userEvent.click(outdoorButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
