import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";

export interface State {
  userData: User;
  logged: boolean;
}

const initialState: State = {
  userData: {
    username: "",
    password: "",
  },
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (user, action: PayloadAction<User>) => ({
      userData: { ...action.payload },
      logged: false,
    }),
  },
});

export const { register: registerActionCreator } = userSlice.actions;

export default userSlice.reducer;
