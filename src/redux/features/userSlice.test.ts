import userReducer, { registerActionCreator } from "./userSlice";

describe("Given a userSlice with a register reducer", () => {
  describe("When it receives an initial state and an action with valid new user data", () => {
    test("Then it should return the inital state with the username provided in user data", () => {
      const inputUsername = "Mike";
      const inputPassword = "Tyson";
      const initialUser = {
        userData: {
          username: "",
          password: "",
        },
        logged: false,
      };

      const expectedNewUser = {
        userData: {
          username: inputUsername,
          password: inputPassword,
        },
        logged: false,
      };

      const registerAction = registerActionCreator(expectedNewUser.userData);
      const newUser = userReducer(initialUser, registerAction);

      expect(newUser).toEqual(expectedNewUser);
    });
  });
});
