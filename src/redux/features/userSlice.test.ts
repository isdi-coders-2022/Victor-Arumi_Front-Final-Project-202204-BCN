import userReducer, {
  logInActionCreator,
  registerActionCreator,
} from "./userSlice";

let token = false;
const initialUserState = {
  username: "",
  name: "",
  profilePicture: "",
  logged: token,
};

const inputUsername = "Mike";

describe("Given a userSlice reducer", () => {
  describe("When it receives an initial state and a register action with valid new user data", () => {
    test("Then it should return the new state with the username provided in user data", () => {
      const payload = { username: inputUsername };

      const expectedNewUser = {
        username: inputUsername,
        name: "",
        profilePicture: "",
        logged: false,
      };

      const registerAction = registerActionCreator(payload);
      const newUserState = userReducer(initialUserState, registerAction);

      expect(newUserState).toEqual(expectedNewUser);
    });
  });

  describe("When it receives an initial state and a login action with valid user credentials", () => {
    test("Then it should return the new state with the username, name and profilepicture url of the user", () => {
      const loggedId = "tysonid";
      const loggedUserName = "Tyson";
      const loggedUserProfilePicture = "MikeTyson.jpg";
      const payload = {
        id: loggedId,
        username: inputUsername,
        name: loggedUserName,
        profilePicture: loggedUserProfilePicture,
      };

      const expectedNewUser = {
        id: loggedId,
        username: inputUsername,
        name: loggedUserName,
        profilePicture: loggedUserProfilePicture,
        logged: true,
      };

      const registerAction = logInActionCreator(payload);
      const newUserState = userReducer(initialUserState, registerAction);

      expect(newUserState).toEqual(expectedNewUser);
    });
  });
});
