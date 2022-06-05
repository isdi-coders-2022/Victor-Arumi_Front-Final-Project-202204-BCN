import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginControl from "./LoginControl";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = false;

describe("Given a LoginControl component", () => {
  describe("When it's invoked and logged status is false", () => {
    test("Then it should call navigate with login page path", () => {
      const loginPagePath = "/login";
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
          <LoginControl>
            <p>Chilren</p>
          </LoginControl>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith(loginPagePath);
    });
  });

  describe("When it's invoked and logged status is true", () => {
    test("Then it should call navigate with login page path", () => {
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
          <LoginControl>
            <h1>Children</h1>
          </LoginControl>
        </Provider>
      );

      const childrenText = screen.getByRole("heading", { name: "Children" });

      expect(childrenText).toBeInTheDocument();
    });
  });
});
