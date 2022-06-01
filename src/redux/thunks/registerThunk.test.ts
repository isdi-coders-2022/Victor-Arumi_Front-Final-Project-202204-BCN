import { server } from "../../mocks/server";

import { Dispatch } from "@reduxjs/toolkit";
import { User } from "../../types/types";
import registerThunk from "./registerThunk";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers);
afterAll(() => server.close);

describe("Given a registerThunk", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch", async () => {
      const dispatch: Dispatch = jest.fn();

      const userData: User = {
        username: "Nicolas",
        password: "Cage",
      };

      const thunk = registerThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
