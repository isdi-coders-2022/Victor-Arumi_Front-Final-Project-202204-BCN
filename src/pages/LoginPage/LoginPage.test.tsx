import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

describe("Given a RegisterPage component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 3 input fields, a password input and a button with text'Crear cuenta'", () => {
      const passwordInputLabelText = "Contraseña";
      const registerButtonText = "Entrar";
      const inputsNumber = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
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
