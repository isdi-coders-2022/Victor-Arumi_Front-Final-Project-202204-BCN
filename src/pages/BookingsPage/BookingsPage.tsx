import { useEffect, useState } from "react";
import BookingsList from "../../components/BookingsList/BookingsList";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadBookingsThunk } from "../../redux/thunks/bookingsThunks/bookingsThunks";

const BookingsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector((state) => state.bookings);
  const limit = 4;
  const initialPage = 1;

  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    dispatch(loadBookingsThunk(limit, page));
  }, [dispatch, page]);

  const emptyPage = bookings.length === 0;
  const lastPage = bookings.length < limit;
  const firstPage = page === 1;

  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="bg-customblue/20 h-full flex flex-col items-center ">
      <h2 className="text-center my-5 text-3xl">Reservas</h2>
      {emptyPage ? (
        <h3 className="text-center my-5 text-2xl">No hay más reservas</h3>
      ) : null}
      <BookingsList bookings={bookings} />
      <div className="flex items-center text-center w-80 mb-6 justify-around ">
        <button
          className="disabled:opacity-50"
          onClick={previousPage}
          disabled={firstPage}
        >
          Anterior
        </button>
        <p>Página {page}</p>
        <button
          className="disabled:opacity-50"
          onClick={nextPage}
          disabled={lastPage}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default BookingsPage;
