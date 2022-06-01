import { rest } from "msw";
import { IRegisterForm } from "../types/types";

export const mockNewUser: IRegisterForm = {
  username: "Michael",
  password: "Jordan",
  name: "Goat",
  profilePicture: "Last_dance.jpg",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(mockNewUser));
    }
  ),
];
