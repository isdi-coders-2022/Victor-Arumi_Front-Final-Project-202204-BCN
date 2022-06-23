import { server } from "../../mocks/server";

import { Dispatch } from "@reduxjs/toolkit";
import registerThunk from "./registerThunk";
import { mockNewUser } from "../../mocks/handlers";
import { registerActionCreator } from "../features/userSlice";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers);
afterAll(() => server.close);

describe("Given a registerThunk", () => {
  describe("When it is called with valid user register data", () => {
    test("Then it should call dispatch with a register action", async () => {
      const dispatch: Dispatch = jest.fn();

      const payload = { username: mockNewUser.username };

      const registerAction = registerActionCreator(payload);

      const userRegisterData = mockNewUser;

      const thunk = registerThunk(userRegisterData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(registerAction);
    });
  });

  describe("When it is called with invalid user register data", () => {
    test("Then it should return a error message", async () => {
      const dispatch: Dispatch = jest.fn();

      const payload = { username: mockNewUser.username };

      const registerAction = registerActionCreator(payload);

      const userRegisterData = mockNewUser;

      const thunk = registerThunk(userRegisterData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(registerAction);
    });
  });
});
