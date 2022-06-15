import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../../components/BookingForm/BookingForm";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { getBookingAndPlayersUsernamesThunk } from "../../redux/thunks/bookingsThunks/bookingsThunks";

const EditBookingPage = (): JSX.Element => {
  const bookings = useAppSelector((state) => state.bookings);
  const { playersUsernames } = useAppSelector((state) => state.booking);

  const { id } = useParams();
  const bookingToEdit: any = bookings.find((booking) => booking.id === id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(getBookingAndPlayersUsernamesThunk(id as string));
    } catch (error) {}
  }, [dispatch, id]);

  return (
    <div className="bg-customblue/20">
      <h1 className="text-center my-5 text-3xl">Editar reserva</h1>
      <BookingForm booking={bookingToEdit} usernames={playersUsernames} />
    </div>
  );
};

export default EditBookingPage;
