export interface UserSliceState {
  username: string;
  name: string;
  profilePicture: string;
  logged: boolean;
}

export interface RegisterPayload {
  username: string;
}

export interface LogInPayload {
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
