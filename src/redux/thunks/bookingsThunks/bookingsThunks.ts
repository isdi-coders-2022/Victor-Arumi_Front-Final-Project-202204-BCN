import axios from "axios";
import { toast } from "react-toastify";
import { IBooking } from "../../../types/types";
import {
  deleteBookingActionCreator,
  loadBookingsActionCreator,
} from "../../features/bookingsSlice";
import { AppDispatch } from "../../store";

interface AxiosGetBookingsResponse {
  bookings: IBooking[];
}

const getAuthData = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const loadBookingsThunk = () => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}bookings`;

  const id = toast.loading("Cargando...", {
    isLoading: true,
    position: "top-center",
  });

  const {
    data: { bookings },
  } = await axios.get<AxiosGetBookingsResponse>(url, getAuthData());

  dispatch(loadBookingsActionCreator(bookings));

  toast.update(id, {
    isLoading: false,
    autoClose: 400,
  });
};

export const deleteBookingThunk =
  (bookingIdToDelete: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}bookings/${bookingIdToDelete}`;
    try {
      const {
        status,
        data: { msg },
      } = await axios.delete(url, getAuthData());

      if (status === 200) {
        dispatch(deleteBookingActionCreator(bookingIdToDelete));
        toast.success("Reserva eliminada");
      }

      if (status === 404) {
        toast.error(msg);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
