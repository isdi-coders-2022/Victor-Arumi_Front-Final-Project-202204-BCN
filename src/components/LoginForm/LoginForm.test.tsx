import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import store from "../../redux/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When the text 'typing...' is typed in the username input field", () => {
    test("Then the value of the username input field shoul be 'typing...", () => {});
    const usernameInputName = "Nombre de usuario";
    const typedText = "typing...";

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: usernameInputName,
    });
    userEvent.type(input, typedText);

    expect(input).toHaveValue(typedText);
  });

  describe("When it's invoked", () => {
    test("Then it should render 1 input field, a password input and a button with text'Entrar'", () => {
      const passwordInputLabelText = "Contraseña";
      const registerButtonText = "Entrar";
      const inputsNumber = 1;

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const inputs: HTMLInputElement[] = screen.getAllByRole("textbox");
      const passwordLabel: HTMLElement = screen.getByLabelText(
        passwordInputLabelText
      );
      const button: HTMLElement = screen.getByRole("button", {
        name: registerButtonText,
      });

      expect(inputs).toHaveLength(inputsNumber);
      expect(passwordLabel).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
