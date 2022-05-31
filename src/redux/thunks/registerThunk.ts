import axios from "axios";
import { IRegisterForm } from "../../types/types";
import { registerActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store";

const registerThunk =
  (userData: IRegisterForm) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;
    const { data } = await axios.post(url, userData);

    dispatch(registerActionCreator(data));
  };

export default registerThunk;
