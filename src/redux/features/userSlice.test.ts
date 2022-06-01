import userReducer, { registerActionCreator } from "./userSlice";

describe("Given a userSlice with a register reducer", () => {
  describe("When it receives an initial state and an action with valid new user data", () => {
    test("Then it should return the inital state with the username provided in user data", () => {
      const inputUsername = "Mike";
      const payload = { username: inputUsername };
      const initialUser = {
        username: "",
        name: "",
        profilePicture: "",
        logged: false,
      };

      const expectedNewUser = {
        username: inputUsername,
        name: "",
        profilePicture: "",
        logged: false,
      };

      const registerAction = registerActionCreator(payload);
      const newUser = userReducer(initialUser, registerAction);

      expect(newUser).toEqual(expectedNewUser);
    });
  });
});
