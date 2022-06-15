import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { BrowserRouter } from "react-router-dom";
import BookingsPage from "./BookingsPage";
import userEvent from "@testing-library/user-event";

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
  describe("When it's invoked and the user clicks on all buttons", () => {
    test("Then it should render a level 1 heading with text 'Todas las reservas' and dispatch should be called 6 times", () => {
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

      userEvent.click(outdoorButton);
      userEvent.click(indoorButton);
      userEvent.click(openButton);
      fireEvent.change(dateButton, { target: { value: "2020-05-12" } });
      userEvent.click(nextButton);
      userEvent.click(previousButton);

      expect(outdoorButton).toBeInTheDocument();
      expect(indoorButton).toBeInTheDocument();
      expect(openButton).toBeInTheDocument();
      expect(dateButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
      expect(previousButton).toBeInTheDocument();

      expect(heading).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalledTimes(6);
    });
  });
});
