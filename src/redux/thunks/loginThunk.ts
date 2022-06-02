import axios from "axios";
import jwtDecode from "jwt-decode";
import { ILoginForm, LogInPayload } from "../../types/types";
import { logInActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store";

interface LoginApiResponse {
  token: string;
}

const loginThunk =
  (userCredentials: ILoginForm) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/login`;
    const {
      data: { token },
    } = await axios.post<LoginApiResponse>(url, userCredentials);

    localStorage.setItem("token", token);

    const userDetails: LogInPayload = await jwtDecode(token);

    dispatch(logInActionCreator(userDetails));
  };

export default loginThunk;
