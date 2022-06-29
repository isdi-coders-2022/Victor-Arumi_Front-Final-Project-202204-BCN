import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";
import BookingForm from "./BookingForm";
import mockBookings from "../../mocks/mockBookings";
import { BrowserRouter } from "react-router-dom";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a CreateBooking component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 5 selects and 3 buttons", () => {
      const totalButtons = 4;
      const totalSelects = 5;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <BookingForm booking={mockBookings[0]} usernames={[]} />
          </Provider>
        </BrowserRouter>
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
        <BrowserRouter>
          <Provider store={store}>
            <BookingForm
              booking={mockBookings[0]}
              usernames={["John", "Mark", "Roger", "Nick"]}
            />
          </Provider>
        </BrowserRouter>
      );

      const createBooking = screen.getByRole("button", {
        name: CreateBookingButtonText,
      });
      const indoorButton = screen.getByRole("button", {
        name: indoorButtonText,
      });
      const outdoorButton = screen.getByRole("button", {
        name: outdoorButtonText,
      });
      const toggleOpenBookingButton = screen.getByRole("button", {
        name: "Abrir o Cerrar partida",
      });
      const clubSelect = screen.getByRole("combobox", { name: "Club" });

      userEvent.click(outdoorButton);
      userEvent.click(outdoorButton);
      userEvent.click(indoorButton);
      userEvent.click(indoorButton);
      fireEvent.change(clubSelect, { target: { value: "RCTB" } });

      userEvent.click(toggleOpenBookingButton);
      userEvent.click(toggleOpenBookingButton);
      userEvent.click(createBooking);

      expect(clubSelect).toBeInTheDocument();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
