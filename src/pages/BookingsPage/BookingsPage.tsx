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

  const limit = 6;
  const initialPage = 1;
  const initialType = "";
  const initialStatus = "";
  const initialDate = "";
  const initialOwner = "";

  useEffect(() => {
    if (username) {
      setUser(id as string);
      setOwner(initialOwner);
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
  const [owner, setOwner] = useState(initialOwner);
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    dispatch(loadBookingsThunk(limit, page, type, status, date, user, owner));
  }, [date, dispatch, owner, page, status, type, user]);

  const emptyPage = bookings.length === 0;
  const lastPage = bookings.length < limit;
  const firstPage = page === 1;

  const changeDate = (event: ChangeEvent<HTMLInputElement>): void => {
    setDate(event.target.value);
  };

  const statusButtonOutput = () =>
    status === "" ? setStatus("open") : setStatus("");

  const ownerButtonOutput = () =>
    owner === "" ? setOwner(id as string) : setOwner("");

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
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
  };
  const previousPage = () => {
    setPage(page - 1);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  return (
    <BookingsPageStyled>
      <div className=" flex flex-col items-center ">
        <h1 className="text-center my-5 text-3xl">
          {user ? "Mis reservas" : "Todas las reservas"}
        </h1>
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
            {user ? (
              <button
                onClick={ownerButtonOutput}
                className={
                  "filters-container__button " +
                  (owner ? "filters-container__button--active" : "")
                }
              >
                Res. Propias
              </button>
            ) : (
              <button
                onClick={statusButtonOutput}
                className={
                  "filters-container__button " +
                  (status === "open" ? "filters-container__button--active" : "")
                }
              >
                Res. Abierta
              </button>
            )}
            <input
              title="Fecha"
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
        {emptyPage ? (
          <h3 className="text-center my-5 text-2xl">No hay más reservas</h3>
        ) : null}
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
