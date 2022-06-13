export interface UserSliceState {
  username: string;
  name: string;
  profilePicture: string;
  profilePictureBackup: string;
  logged: boolean;
  id?: string;
}

export interface BookingSliceState {
  booking: IBooking;
  playersUsernames: string[];
}

export interface IBooking {
  id: string;
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

export interface RegisterPayload {
  username: string;
}

export interface LogInPayload {
  id: string;
  username: string;
  name: string;
  profilePicture: string;
  profilePictureBackup: string;
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

export interface ICreateBookingForm {
  club: string;
  owner: string;
  date: string;
  hour: string;
  courtType: string;
  players: string[];
  open: boolean;
  player1: string;
  player2: string;
  player3: string;
  player4: string;
}

export interface ICreateSubmittedBooking {
  club: string;
  owner: string;
  date: string;
  hour: string;
  courtType: string;
  players: string[];
  open: boolean;
}
