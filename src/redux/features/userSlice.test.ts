import userReducer, {
  logInActionCreator,
  logOutActionCreator,
  registerActionCreator,
} from "./userSlice";

let token = false;
const initialUserState = {
  username: "",
  name: "",
  profilePicture: "",
  profilePictureBackup: "",
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
        profilePictureBackup: "",
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
      const loggedprofilePictureBackup = "thebackup.jpg";

      const payload = {
        id: loggedId,
        username: inputUsername,
        name: loggedUserName,
        profilePicture: loggedUserProfilePicture,
        profilePictureBackup: loggedprofilePictureBackup,
      };

      const expectedNewUser = {
        id: loggedId,
        username: inputUsername,
        name: loggedUserName,
        profilePicture: loggedUserProfilePicture,
        profilePictureBackup: loggedprofilePictureBackup,
        logged: true,
      };

      const registerAction = logInActionCreator(payload);
      const newUserState = userReducer(initialUserState, registerAction);

      expect(newUserState).toEqual(expectedNewUser);
    });
  });

  describe("When it receives an state with a user a logout action", () => {
    test("Then it should return the new state with the initial state", () => {
      const loggedId = "tysonid";
      const loggedUserName = "Tyson";
      const loggedUserProfilePicture = "MikeTyson.jpg";
      const loggedprofilePictureBackup = "thebackup.jpg";

      token = true;

      const currentUserState = {
        id: loggedId,
        username: inputUsername,
        name: loggedUserName,
        profilePicture: loggedUserProfilePicture,
        profilePictureBackup: loggedprofilePictureBackup,
        logged: true,
      };

      const expectedNewUser = {
        username: "",
        name: "",
        profilePicture: "",
        profilePictureBackup: "",
        logged: false,
      };

      const logoutAction = logOutActionCreator();
      const newUserState = userReducer(currentUserState, logoutAction);

      expect(newUserState).toEqual(expectedNewUser);
    });
  });
});
