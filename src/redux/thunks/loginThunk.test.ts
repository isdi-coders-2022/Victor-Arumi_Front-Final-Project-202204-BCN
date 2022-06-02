import { server } from "../../mocks/server";

import { Dispatch } from "@reduxjs/toolkit";
import { mockUserCredentials } from "../../mocks/handlers";
import loginThunk from "./loginThunk";
import { logInActionCreator } from "../features/userSlice";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers);
afterAll(() => server.close);

jest.mock("jwt-decode", () => () => ({
  id: "id",
  username: "Gerard",
  name: "Pique",
  profilePicture: "Bernabeu",
}));

describe("Given a loginThunk", () => {
  describe("When it is called with login credentials", () => {
    test("Then it should call dispatch with a login action", async () => {
      const dispatch: Dispatch = jest.fn();

      const payload = {
        id: "id",
        username: "Gerard",
        name: "Pique",
        profilePicture: "Bernabeu",
      };

      const loginAction = logInActionCreator(payload);

      const userLoginData = mockUserCredentials;

      const thunk = loginThunk(userLoginData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loginAction);
    });
  });
});
