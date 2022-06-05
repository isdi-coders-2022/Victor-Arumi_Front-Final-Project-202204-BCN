export interface UserSliceState {
  username: string;
  name: string;
  profilePicture: string;
  logged: boolean;
  id?: string;
}

export interface IBooking {
  club: string;
  owner: string;
  date: string;
  hour: string;
  courtType: string;
  players: string[];
  open: boolean;
}

export interface IBookingsList {
  bookings: IBooking[];
}

export interface UserSliceState {
  username: string;
  name: string;
  profilePicture: string;
  logged: boolean;
  id?: string;
}

export interface RegisterPayload {
  username: string;
}

export interface LogInPayload {
  id: string;
  username: string;
  name: string;
  profilePicture: string;
}

export interface IRegisterForm {
  username: string;
  password: string;
  name: string;
  profilePicture: string;
}

export interface ILoginForm {
  username: string;
  password: string;
}
