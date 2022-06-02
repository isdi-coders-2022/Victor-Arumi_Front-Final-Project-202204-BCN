import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { BrowserRouter } from "react-router-dom";
import ClubsPage from "./ClubsPage";

describe("Given a ClubsPage component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a level 1 heading with text 'Aqui irán los clubs'", () => {
      const HeadingText = "Aqui irán los clubs";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ClubsPage />
          </Provider>
        </BrowserRouter>
      );

      const heading: HTMLHeadingElement = screen.getByRole("heading", {
        level: 1,
        name: HeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
