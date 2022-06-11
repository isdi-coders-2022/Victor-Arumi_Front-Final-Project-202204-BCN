import { ChangeEvent, useState } from "react";
import "@fontsource/urbanist";

import { IBooking, ICreateBookingForm } from "../../types/types";
import { useAppDispatch } from "../../redux/store/hooks";
import {
  createBookingThunk,
  editBookingThunk,
} from "../../redux/thunks/bookingsThunks/bookingsThunks";
interface Props {
  booking: IBooking;
  usernames: string[];
}

const BookingForm = ({
  booking: { owner, club, date, hour, courtType, players, open, id: bookingId },
  usernames,
}: Props): JSX.Element => {
  const editMode = bookingId ? true : false;

  const initialFormValues: ICreateBookingForm = {
    owner: owner,
    club: club,
    date: date,
    hour: hour,
    courtType: courtType,
    player1: players[0],
    player2: players[1],
    player3: players[2],
    player4: players[3],
    players: players,
    open: open,
  };

  const [openBooking, toggleOpenBooking] = useState(true);
  const openToggleClass = "transform translate-x-5";
  const checkIfBookingIsFull = () =>
    inputsData.player2 && inputsData.player3 && inputsData.player4;

  const [currentCourtType, toggleCourtType] = useState(true);
  const toggleButtonsClass = " bg-customblue";

  const [inputsData, setInputsData] =
    useState<ICreateBookingForm>(initialFormValues);

  const changeData = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    setInputsData({
      ...inputsData,
      [event.target.id]: event.target.value,
    });
  };

  const dispatch = useAppDispatch();

  const createBookingSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const formData = {
      owner: inputsData.owner,
      club: inputsData.club ?? "RCTB",
      date: inputsData.date,
      hour: inputsData.hour,
      courtType: currentCourtType ? "Indoor" : "Outdoor",
      players: [
        inputsData.player1,
        inputsData.player2,
        inputsData.player3,
        inputsData.player4,
      ].filter((player) => player !== ""),
      open: checkIfBookingIsFull() ? false : openBooking,
    };

    editMode
      ? dispatch(editBookingThunk(formData, bookingId))
      : dispatch(createBookingThunk(formData));
    setInputsData(initialFormValues);
  };

  return (
    <div className="flex bg-white w-100m items-center justify-center ">
      <form
        className="flex flex-col justify-center mt-3"
        autoComplete="off"
        noValidate
      >
        <div className="inputs-container">
          <label
            htmlFor="club"
            className="block mb-2 text-m font-medium text-black"
          >
            Club
          </label>
          <select
            onChange={changeData}
            id="club"
            className="bg-customblue/20 mb-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-customblue focus:border-customblue block w-full p-2.5"
          >
            <option defaultValue={club}>{club}</option>
            <option value="RCTB-1899">RCTB-1899</option>
            <option value="Vall Parc">Vall Parc Club Esportiu</option>
            <option value="RCPB">Real Club de Polo BCN</option>
          </select>
          <label
            htmlFor="date"
            className="block mb-2 text-m font-medium text-black"
          >
            Fecha
            <input
              className="bg-customblue/20 mb-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-customblue focus:border-customblue block w-full p-2.5"
              id="date"
              type="date"
              value={inputsData.date}
              onChange={changeData}
            />
          </label>
          <label
            htmlFor="hour"
            className="block mb-2 text-m font-medium text-black"
          >
            Hora
            <input
              className="bg-customblue/20 mb-2 border border-gray-300 text-black text-sm rounded-lg focus:ring-customblue focus:border-customblue block w-full p-2.5"
              id="hour"
              type="time"
              value={inputsData.hour}
              onChange={changeData}
            />
          </label>
        </div>
        <div className="flex items-center justify-center mb-3">
          <div className="inline-flex" role="group">
            <button
              value={inputsData.courtType}
              type="button"
              onClick={() => {
                toggleCourtType(!currentCourtType);
              }}
              className={
                "rounded-l-3xl my-3 inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-customblue focus:outline-none focus:ring-0 transition duration-150 ease-in-out" +
                (currentCourtType ? toggleButtonsClass : " bg-customblue/20")
              }
            >
              Indoor
            </button>
            <button
              type="button"
              onClick={() => {
                toggleCourtType(!currentCourtType);
              }}
              className={
                "rounded-r-3xl my-3 inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-customblue focus:outline-none focus:ring-0 transition duration-150 ease-in-out" +
                (currentCourtType ? " bg-customblue/20" : toggleButtonsClass)
              }
            >
              Outdoor
            </button>
          </div>
        </div>
        <label
          htmlFor="player1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Jugador 1
        </label>
        <select
          disabled
          onChange={changeData}
          id="player1"
          className="bg-customblue/20 border border-gray-300 text-black text-sm rounded-lg focus:ring-customblue focus:border-customblue block w-full p-2.5"
        >
          <option defaultValue={owner}>{usernames[0]} (Creador)</option>
        </select>
        <label
          htmlFor="player2"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Jugador 2
        </label>
        <select
          onChange={changeData}
          id="player2"
          className="bg-customblue/20 border border-gray-300 text-black text-sm rounded-lg focus:ring-customblue focus:border-customblue block w-full p-2.5"
        >
          <option defaultValue={players[1]}>{usernames[1] ?? ""}</option>
          {!editMode ?? <option value=""></option>}
          <option value="629e05f4ab6c6e669141df9b">Bautista</option>
          <option value="629e0393ab6c6e669141df98">Arumi</option>
        </select>
        <label
          htmlFor="player3"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Jugador 3
        </label>
        <select
          onChange={changeData}
          id="player3"
          className="bg-customblue/20 border border-gray-300 text-black text-sm rounded-lg focus:ring-customblue focus:border-customblue block w-full p-2.5"
        >
          <option defaultValue={players[2]}>{usernames[2] ?? ""}</option>
          {!editMode ?? <option value=""></option>}
          <option value="629e05f4ab6c6e669141df9b">Bautista</option>
          <option value="629e0393ab6c6e669141df98">Arumi</option>
        </select>
        <label
          htmlFor="player4"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Jugador 4
        </label>
        <select
          onChange={changeData}
          id="player4"
          className="bg-customblue/20 border border-gray-300 text-black text-sm rounded-lg focus:ring-customblue focus:border-customblue block w-full p-2.5"
        >
          <option defaultValue={players[3]}>{usernames[3] ?? ""}</option>
          {!editMode ?? <option value=""></option>}
          <option value="629e05f4ab6c6e669141df9b">Bautista</option>
          <option value="629e0393ab6c6e669141df98">Arumi</option>
        </select>

        <div className="flex my-5">
          <p className="mx-4">
            Partida{" "}
            {openBooking
              ? checkIfBookingIsFull()
                ? "cerrada"
                : "abierta"
              : "cerrada"}
          </p>
          <div
            className={
              "md:w-14 md:h-7 w-12 h-6 flex items-center bg-customblue rounded-full p-1 cursor-pointer " +
              (checkIfBookingIsFull() ? "pointer-events-none bg-gray-300" : "")
            }
            onClick={() => {
              toggleOpenBooking(checkIfBookingIsFull() ? false : !openBooking);
            }}
          >
            <div
              className={
                "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full transform duration-300 ease-in-out " +
                (openBooking ? openToggleClass : "")
              }
            ></div>
          </div>
        </div>
        <button
          className=" my-2 rounded-3xl my-3 inline-block px-7 py-3 bg-customblue text-white font-medium text-sm leading-snug uppercase hover:bg-blue-700 focus:bg-customblue focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          type="submit"
          onClick={createBookingSubmit}
        >
          {editMode ? "Editar reserva" : "Crear Reserva"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
