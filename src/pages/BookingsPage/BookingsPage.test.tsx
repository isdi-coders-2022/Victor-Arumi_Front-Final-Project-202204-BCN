import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { BrowserRouter } from "react-router-dom";
import BookingsPage from "./BookingsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    username: "62aa10b805045aad33166a42",
  }),
}));

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a BookingsPage component", () => {
  describe("When it's invoked and the user clicks on all buttons (filter and pagination buttons)", () => {
    test("Then it should render a level 1 heading with text 'Todas las reservas'and 6 buttons with specific texts 'Outdoor, Indoor, Res. Abierta, Fecha, Siguiente, Anterior', and dispatch should be called 6 times (1 time per click)", () => {
      const headingText = "Todas las reservas";

      jest.spyOn(global, "setTimeout");
      render(
        <BrowserRouter>
          <Provider store={store}>
            <BookingsPage />
          </Provider>
        </BrowserRouter>
      );

      const heading: HTMLHeadingElement = screen.getByRole("heading", {
        level: 1,
        name: headingText,
      });

      const outdoorButton = screen.getByRole("button", { name: "Outdoor" });
      const indoorButton = screen.getByRole("button", { name: "Indoor" });
      const openButton = screen.getByRole("button", { name: "Res. Abierta" });
      const dateButton = screen.getByTitle("Fecha");

      const nextButton = screen.getByRole("button", { name: "Siguiente" });
      const previousButton = screen.getByRole("button", { name: "Anterior" });

      const buttons = screen.getAllByRole("button");
      buttons.forEach((button) => fireEvent.click(button));
      fireEvent.change(dateButton, { target: { value: "2020-05-12" } });

      expect(heading).toBeInTheDocument();
      expect(outdoorButton).toBeInTheDocument();
      expect(indoorButton).toBeInTheDocument();
      expect(openButton).toBeInTheDocument();
      expect(dateButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
      expect(previousButton).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalledTimes(6);
    });
  });
});
