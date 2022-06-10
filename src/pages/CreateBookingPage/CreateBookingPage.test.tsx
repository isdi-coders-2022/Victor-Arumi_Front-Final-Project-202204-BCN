import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { BrowserRouter } from "react-router-dom";
import CreateBookingPage from "./CreateBookingPage";

describe("Given a CreateBookingsPage component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a level 2 heading with text 'Crear reserva'", () => {
      const headingText = "Crear reserva";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateBookingPage />
          </Provider>
        </BrowserRouter>
      );

      const heading: HTMLHeadingElement = screen.getByRole("heading", {
        level: 2,
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
