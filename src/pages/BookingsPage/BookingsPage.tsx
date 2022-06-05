import { useEffect } from "react";
import BookingsList from "../../components/BookingsList/BookingsList";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import loadBookingsThunk from "../../redux/thunks/bookingsThunks/bookingsThunks";

const BookingsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(loadBookingsThunk());
  }, [dispatch]);

  return (
    <div className="bg-customblue/20">
      <h2 className="text-center my-5 text-3xl">Reservas</h2>
      <BookingsList bookings={bookings} />
    </div>
  );
};

export default BookingsPage;
