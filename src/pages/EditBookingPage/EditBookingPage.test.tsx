import React from "react";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import EditBookingPage from "./EditBookingPage";
import mockBookings from "../../mocks/mockBookings";
import { configureStore, createSlice } from "@reduxjs/toolkit";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: mockBookings[0].id,
  }),
}));

describe("Given a EditBookingsPage component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a level 1 heading with text 'Editar reserva'", () => {
      const headingText = "Editar reserva";

      const mockBookingsSlice = createSlice({
        name: "bookings",
        initialState: mockBookings,
        reducers: {},
      });
      const mockBookingSlice = createSlice({
        name: "booking",
        initialState: {
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
        },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: {
          bookings: mockBookingsSlice.reducer,
          booking: mockBookingSlice.reducer,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <EditBookingPage />
          </Provider>
        </BrowserRouter>
      );

      const heading: HTMLHeadingElement = screen.getByRole("heading", {
        level: 1,
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
