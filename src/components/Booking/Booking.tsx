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

const Booking = (): JSX.Element => {
  return (
    <BookingStyled>
      <div className="booking-info-container">
        <div className="club-container">
          <span>logo</span>
          <h3>nombre del club</h3>
        </div>
        <div className="data-container">
          <div className="data-container_item">
            <span>
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            <p>22/10/2022</p>
          </div>
          <div className="data-container_item">
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
            <p>18:00 a 19:00 h</p>
          </div>
          <div className="data-container_item">
            <span>
              <FontAwesomeIcon icon={faHome} />
            </span>
            <p>Indoor</p>
          </div>
          <div className="data-container_item">
            <span>
              <FontAwesomeIcon icon={faLock} />
            </span>
            <p>Reserva cerrada</p>
          </div>
        </div>
      </div>

      <div className="booking-buttons-container">
        <button>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button>
          <FontAwesomeIcon icon={faUserPlus} />
        </button>
        <button>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </BookingStyled>
  );
};

export default Booking;
