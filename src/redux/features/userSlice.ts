import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LogInPayload,
  RegisterPayload,
  UserSliceState,
} from "../../types/types";

const initialState: UserSliceState = {
  username: "",
  name: "",
  profilePicture: "",
  profilePictureBackup: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (user, action: PayloadAction<RegisterPayload>) => ({
      ...user,
      username: action.payload.username,
    }),
    logIn: (user, action: PayloadAction<LogInPayload>) => ({
      ...action.payload,
      logged: true,
    }),
    logOut: () => ({
      username: "",
      name: "",
      profilePicture: "",
      profilePictureBackup: "",
      logged: false,
    }),
  },
});

export const {
  register: registerActionCreator,
  logIn: logInActionCreator,
  logOut: logOutActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
