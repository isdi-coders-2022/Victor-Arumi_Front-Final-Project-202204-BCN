import { rest } from "msw";
import { ILoginForm, IRegisterForm } from "../types/types";
import mockBookings from "./mockBookings";

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
  rest.get(
    `${process.env.REACT_APP_API_URL}bookings/limit=6&page=1?type=Outdoor&status=true&day=2022-06-09&user=62a6f573650f14ef23b23a3b`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ bookings: mockBookings }));
    }
  ),
];
