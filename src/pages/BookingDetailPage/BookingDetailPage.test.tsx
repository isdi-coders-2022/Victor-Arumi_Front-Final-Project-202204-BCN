import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { BrowserRouter } from "react-router-dom";
import BookingDetailPage from "./BookingDetailPage";

describe("Given a BookingDetailPage component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a level 2 heading with text 'Detalle de la reserva'", () => {
      const HeadingText = "Detalle de la reserva";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <BookingDetailPage />
          </Provider>
        </BrowserRouter>
      );

      const heading: HTMLHeadingElement = screen.getByRole("heading", {
        level: 2,
        name: HeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
