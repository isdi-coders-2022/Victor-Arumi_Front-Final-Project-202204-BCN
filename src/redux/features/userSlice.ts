import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterPayload, UserSliceState } from "../../types/types";

const initialState = {
  username: "",
  name: "",
  profilePicture: "",
  logged: false,
} as UserSliceState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (user, action: PayloadAction<RegisterPayload>) => ({
      ...action.payload,
      name: "",
      profilePicture: "",
      logged: false,
    }),
  },
});

export const { register: registerActionCreator } = userSlice.actions;

export default userSlice.reducer;
