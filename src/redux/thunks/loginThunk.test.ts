import { server } from "../../mocks/server";

import { Dispatch } from "@reduxjs/toolkit";
import { mockUserCredentials } from "../../mocks/handlers";
import loginThunk from "./loginThunk";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers);
afterAll(() => server.close);

jest.mock("jwt-decode", () => () => ({
  username: "Gerard",
  name: "Pique",
  profilePicture: "Bernabeu",
}));

describe("Given a loginThunk", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch", async () => {
      const dispatch: Dispatch = jest.fn();

      const userData = mockUserCredentials;

      const thunk = loginThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
