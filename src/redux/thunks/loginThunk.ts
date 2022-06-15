import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { ILoginForm, LogInPayload } from "../../types/types";
import { logInActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store";

interface LoginApiResponse {
  token: string;
}

const loginThunk =
  (userCredentials: ILoginForm) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/login`;
    const loginToastId = toast.loading("Iniciando sesión...", {
      type: "default",
      isLoading: true,
      position: "top-center",
    });

    try {
      const {
        data: { token },
      } = await axios.post<LoginApiResponse>(url, userCredentials);

      localStorage.setItem("token", token);

      const userDetails: LogInPayload = await jwtDecode(token);
      dispatch(logInActionCreator(userDetails));
      toast.update(loginToastId, {
        render: `!Bienvenido ${userDetails.username}!`,
        type: "success",
        isLoading: false,
        autoClose: 1100,
        closeOnClick: true,
      });
    } catch (error: any) {
      toast.update(loginToastId, {
        render: `Algo ha salido mal: ${error.response.data.msg}`,
        type: "error",
        isLoading: false,
        autoClose: 1100,
        closeOnClick: true,
      });
    }
  };

export default loginThunk;
