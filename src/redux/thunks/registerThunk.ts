import axios from "axios";
import { IRegisterForm } from "../../types/types";
import { registerActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store";

interface registerApiResponse {
  username: string;
}

const registerThunk =
  (userData: IRegisterForm) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;
    const {
      data: { username },
    } = await axios.post<registerApiResponse>(url, userData);

    dispatch(registerActionCreator({ username }));
  };

export default registerThunk;
