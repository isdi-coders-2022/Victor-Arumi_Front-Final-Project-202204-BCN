import BookingStyled from "./BookingStyled";
import {
  faCalendar,
  faClock,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLock,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { IBooking } from "../../types/types";
import { useAppDispatch } from "../../redux/store/hooks";
import { deleteBookingThunk } from "../../redux/thunks/bookingsThunks/bookingsThunks";
import { useNavigate } from "react-router-dom";

interface Props {
  booking: IBooking;
}

const Booking = ({
  booking: { club, date, hour, courtType, open, id },
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const deleteBooking = () => {
    dispatch(deleteBookingThunk(id));
  };

  const navigate = useNavigate();
  const goToEditPage = (): void => navigate(`/bookings/editBooking/${id}`);
  const goToDetailPage = (): void => navigate(`/bookings/detail/${id}`);

  return (
    <BookingStyled onClick={goToDetailPage}>
      <div className="booking-info-container">
        <div className="club-container">
          <h3>{club}</h3>
          <span>logo</span>
        </div>
        <div className="data-container">
          <div className="data-container_item">
            <span>
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            <p>{date}</p>
          </div>
          <div className="data-container_item">
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
            <p>{hour}</p>
          </div>
          <div className="data-container_item">
            <span>
              <FontAwesomeIcon icon={faHome} />
            </span>
            <p>{courtType}</p>
          </div>
          <div className="data-container_item">
            <span>
              <FontAwesomeIcon icon={faLock} />
            </span>
            <p>{`${open ? "Reserva abierta" : "Reserva cerrada"}`}</p>
          </div>
        </div>
      </div>

      <div className="booking-buttons-container">
        <button onClick={goToEditPage}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button>
          <FontAwesomeIcon icon={faUserPlus} />
        </button>
        <button onClick={deleteBooking}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </BookingStyled>
  );
};

export default Booking;
