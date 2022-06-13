import { useEffect, useState } from "react";
import BookingsList from "../../components/BookingsList/BookingsList";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadBookingsThunk } from "../../redux/thunks/bookingsThunks/bookingsThunks";

const BookingsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector((state) => state.bookings);
  const limit = 8;
  const initialPage = 1;

  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    dispatch(loadBookingsThunk(limit, page));
  }, [dispatch, page]);

  const nextPage = () => {
    if (bookings.length > 0) {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="bg-customblue/20 h-full flex flex-col items-center ">
      <h2 className="text-center my-5 text-3xl">Reservas</h2>
      <BookingsList bookings={bookings} />
      <div className="flex items-center text-center w-80 mb-6 justify-around ">
        <button onClick={previousPage}>Anterior</button>
        <p>Página {page}</p>
        <button onClick={nextPage}>Siguiente</button>
      </div>
    </div>
  );
};

export default BookingsPage;
