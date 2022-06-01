import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Given a RegisterForm component", () => {
  describe("When the text 'typing...' is typed in the username input field", () => {
    test("Then the value of the username input field shoul be 'typing...", () => {});
    const usernamePlaceholder = "username";
    const typedText = "typing...";

    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );
    const input: HTMLInputElement =
      screen.getByPlaceholderText(usernamePlaceholder);
    userEvent.type(input, typedText);

    expect(input).toHaveValue(typedText);
  });

  describe("When it's invoked", () => {
    test("Then it should render 2 input fields with placeholder 'username' and 'password' and a 'Crear cuenta' button", () => {
      const usernamePlaceholder = "username";
      const passwordPlaceholder = "password";
      const registerButtonText = "Crear cuenta";

      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const usernameInput: HTMLInputElement =
        screen.getByPlaceholderText(usernamePlaceholder);
      const passwordInput: HTMLInputElement =
        screen.getByPlaceholderText(passwordPlaceholder);

      const button: HTMLElement = screen.getByRole("button", {
        name: registerButtonText,
      });

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
