import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import NavBar from "./NavBar";
import userEvent from "@testing-library/user-event";

describe("Given a NavBar component", () => {
  describe("When it's invoked", () => {
    test("Then a button and 3 links should be rendered", () => {});
    const totalLinks = 3;

    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    const button = screen.getByRole("button");
    const links = screen.getAllByRole("link");
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(links).toHaveLength(totalLinks);
  });
});
