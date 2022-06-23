import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";
import { MemoryRouter as Router } from "react-router-dom";
import store from "../../redux/store";
import { Provider } from "react-redux";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const usernameInputName = "Nombre de usuario";
const nameInputName = "Nombre";
const passwordInputLabelText = "Contraseña";
const profilePictureInputLabelText = "Imagen de perfil";
const registerButtonText = "Crear cuenta";

describe("Given a RegisterForm component", () => {
  describe("When the text 'typing...' is typed in the username input field", () => {
    test("Then the value of the username input field shoul be 'typing...", () => {});
    const typedText = "typing...";

    render(
      <Provider store={store}>
        <Router>
          <RegisterForm />
        </Router>
      </Provider>
    );
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: usernameInputName,
    });
    userEvent.type(input, typedText);

    expect(input).toHaveValue(typedText);
  });

  describe("When it's invoked", () => {
    test("Then it should render 2 input fields, a file and a password input and a button with text'Crear cuenta'", () => {
      const inputsNumber = 2;

      render(
        <Provider store={store}>
          <Router>
            <RegisterForm />
          </Router>
        </Provider>
      );

      const inputs: HTMLInputElement[] = screen.getAllByRole("textbox");
      const passwordLabel: HTMLElement = screen.getByLabelText(
        passwordInputLabelText
      );
      const profilePictureLabel: HTMLElement = screen.getByLabelText(
        profilePictureInputLabelText
      );

      const button: HTMLElement = screen.getByRole("button", {
        name: registerButtonText,
      });

      expect(inputs).toHaveLength(inputsNumber);
      expect(passwordLabel).toBeInTheDocument();
      expect(profilePictureLabel).toBeInTheDocument();

      expect(button).toBeInTheDocument();
    });
  });

  describe("When invoked and the user clicks on 'Crear cuenta' button", () => {
    test("Then it should call dispatch", () => {
      const buttonText = "Crear cuenta";
      const typedUsername = "username";
      const typedPassword = "password";
      const typedName = "name";

      render(
        <Provider store={store}>
          <Router>
            <RegisterForm />
          </Router>
        </Provider>
      );

      const usernameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: usernameInputName,
      });
      userEvent.type(usernameInput, typedUsername);

      const passwordInput: HTMLElement = screen.getByLabelText(
        passwordInputLabelText
      );

      const nameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: nameInputName,
      });

      userEvent.type(usernameInput, typedUsername);
      userEvent.type(passwordInput, typedPassword);
      userEvent.type(nameInput, typedName);

      const registerButton = screen.getByRole("button", { name: buttonText });
      userEvent.click(registerButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
