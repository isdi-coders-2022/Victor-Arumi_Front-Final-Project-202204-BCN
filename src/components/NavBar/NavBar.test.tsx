import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import NavBar from "./NavBar";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import { configureStore, createSlice } from "@reduxjs/toolkit";

let mockLogged = false;

describe("Given a NavBar component", () => {
  describe("When it's invoked and state has logged:false", () => {
    test("Then a button and 2 links with name 'Crear cuenta' and 'Iniciar sesión' should be rendered", () => {});
    const expectedLinks = 2;
    const mockUserSlice = createSlice({
      name: "user",
      initialState: { logged: mockLogged },
      reducers: {},
    });

    const mockStore = configureStore({
      reducer: { user: mockUserSlice.reducer },
    });

    render(
      <Provider store={mockStore}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );

    const menuButton = screen.getByRole("button", { name: "Menú" });
    const totalLinks = screen.getAllByRole("link");
    const registerLink = screen.getByRole("link", { name: "Crear cuenta" });
    const loginLink = screen.getByRole("link", { name: "Iniciar sesión" });
    userEvent.click(menuButton);
    userEvent.click(registerLink);

    expect(menuButton).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(totalLinks).toHaveLength(expectedLinks);
  });

  describe("When it's invoked and state has logged:true", () => {
    test("Then a link with name 'Reservas' a clickable text 'Cerrar sesión' should be rendered", () => {});
    mockLogged = true;
    const mockUserSlice = createSlice({
      name: "user",
      initialState: { logged: mockLogged },
      reducers: {},
    });

    const mockStore = configureStore({
      reducer: { user: mockUserSlice.reducer },
    });

    render(
      <Provider store={mockStore}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );

    const bookingsLink = screen.getByRole("link", { name: "Reservas" });
    const logOutLink = screen.getByText("Cerrar sesión");
    userEvent.click(logOutLink);

    expect(bookingsLink).toBeInTheDocument();
    expect(logOutLink).toBeInTheDocument();
  });
});
