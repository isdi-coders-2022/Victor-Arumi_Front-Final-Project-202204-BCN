import axios from "axios";
import { toast } from "react-toastify";
import { IRegisterForm } from "../../types/types";
import { registerActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store";

interface RegisterApiResponse {
  username: string;
}

const registerThunk =
  (userData: FormData | IRegisterForm) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;
    try {
      const {
        data: { username },
      } = await axios.post<RegisterApiResponse>(url, userData);

      dispatch(registerActionCreator({ username }));
    } catch (error: any) {
      toast.error(`Error en el registro: ${error.response.data.msg}`);
    }
  };

export default registerThunk;
