import { server } from "../../mocks/server";

import { Dispatch } from "@reduxjs/toolkit";
import registerThunk from "./registerThunk";
import { mockNewUser } from "../../mocks/handlers";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers);
afterAll(() => server.close);

describe("Given a registerThunk", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch", async () => {
      const dispatch: Dispatch = jest.fn();

      const userData = mockNewUser;

      const thunk = registerThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
