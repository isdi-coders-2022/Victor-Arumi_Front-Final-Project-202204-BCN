import { rest } from "msw";
import { ILoginForm, IRegisterForm } from "../types/types";

export const mockNewUser: IRegisterForm = {
  username: "Michael",
  password: "Jordan",
  name: "Goat",
  profilePicture: "Last_dance.jpg",
};

export const mockUserCredentials: ILoginForm = {
  username: "Michael",
  password: "Jordan",
};

const mockToken = "token";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(mockNewUser));
    }
  ),
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: mockToken }));
  }),
];
