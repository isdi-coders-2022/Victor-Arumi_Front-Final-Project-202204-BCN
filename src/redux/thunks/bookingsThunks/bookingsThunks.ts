import axios from "axios";
import { IBooking } from "../../../types/types";
import { loadBookingsActionCreator } from "../../features/bookingsSlice";
import { AppDispatch } from "../../store";

interface AxiosGetBookingsResponse {
  bookings: IBooking[];
}

const loadBookingsThunk = () => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}bookings`;
  const {
    data: { bookings },
  } = await axios.get<AxiosGetBookingsResponse>(url);

  dispatch(loadBookingsActionCreator(bookings));
};

export default loadBookingsThunk;
