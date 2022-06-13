import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingsList from "../../components/BookingsList/BookingsList";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadBookingsThunk } from "../../redux/thunks/bookingsThunks/bookingsThunks";
import BookingsPageStyled from "./BookingsPageStyled";

const BookingsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector((state) => state.bookings);
  const { id } = useAppSelector((state) => state.user);

  const { username } = useParams();

  const [user, setUser] = useState("");

  const limit = 4;
  const initialPage = 1;
  const initialType = "";
  const initialStatus = "";
  const initialDate = "";

  useEffect(() => {
    if (username) {
      setUser(id as string);
      setPage(initialPage);
      setType(initialType);
      setStatus(initialStatus);
      setDate(initialDate);
    } else {
      setUser("");
    }
  }, [id, username]);

  const [page, setPage] = useState(initialPage);
  const [type, setType] = useState(initialType);
  const [status, setStatus] = useState(initialStatus);
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    dispatch(loadBookingsThunk(limit, page, type, status, date, user));
  }, [date, dispatch, page, status, type, user]);

  const emptyPage = bookings.length === 0;
  const lastPage = bookings.length < limit;
  const firstPage = page === 1;

  const changeDate = (event: ChangeEvent<HTMLInputElement>): void => {
    setDate(event.target.value);
  };

  const statusButtonOutput = () =>
    status === "" ? setStatus("open") : setStatus("");

  const indoorButtonOutput = () => {
    if (type === "") {
      setType("Indoor");
    } else {
      setType("");
    }
  };

  const outdoorButtonOutput = () => {
    if (type === "") {
      setType("Outdoor");
    } else {
      setType("");
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <BookingsPageStyled>
      <div className=" flex flex-col items-center ">
        <h2 className="text-center my-5 text-3xl">
          {user ? "Mis reservas" : "Todas las reservas"}
        </h2>
        {emptyPage ? (
          <h3 className="text-center my-5 text-2xl">No hay más reservas</h3>
        ) : null}
        <div className="filters-container">
          <div className="filters-container__section">
            <button
              onClick={indoorButtonOutput}
              className={
                "filters-container__button " +
                (type === "Indoor" ? "filters-container__button--active" : "")
              }
            >
              Indoor
            </button>
            <button
              onClick={outdoorButtonOutput}
              className={
                "filters-container__button " +
                (type === "Outdoor" ? "filters-container__button--active" : "")
              }
            >
              Outdoor
            </button>
          </div>
          <div className="filters-container__section">
            <button
              onClick={statusButtonOutput}
              className={
                "filters-container__button " +
                (status === "open" ? "filters-container__button--active" : "")
              }
            >
              Res. Abierta
            </button>
            <input
              type="date"
              onChange={changeDate}
              value={date}
              className={
                "filters-container__button " +
                (date !== "" ? "filters-container__button--active" : "")
              }
            ></input>
          </div>
        </div>
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
    </BookingsPageStyled>
  );
};

export default BookingsPage;
