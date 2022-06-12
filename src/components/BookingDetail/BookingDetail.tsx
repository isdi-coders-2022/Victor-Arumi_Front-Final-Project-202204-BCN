import BookingDetailStyled from "./BookingDetailStyled";
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

const BookingDetail = ({
  booking: { club, date, hour, courtType, open, id },
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const deleteBooking = () => {
    dispatch(deleteBookingThunk(id));
  };

  const navigate = useNavigate();
  const goToEditPage = (): void => navigate(`/bookings/editBooking/${id}`);

  return (
    <BookingDetailStyled>
      <div className="non-detail-container">
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
      </div>
      <span className="border-t-2 border-customblue/20 pb-5 mt-5  w-3/4"></span>
      <div className="detail-container">
        <p className="text-center mb-2"> Jugadores</p>

        <div className="player-info">
          <h4 className="player-info_player-name bg-customblue/20  border border-gray-300 -sm rounded-lg ">
            Player1
          </h4>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
            className="player-info_player-picture"
          />
        </div>
        <div className="player-info">
          <h4 className="player-info_player-name bg-customblue/20  border border-gray-300 -sm rounded-lg ">
            Player2
          </h4>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
            className="player-info_player-picture"
          />
        </div>
        <div className="player-info">
          <h4 className="player-info_player-name bg-customblue/20  border border-gray-300 -sm rounded-lg ">
            Player3
          </h4>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
            className="player-info_player-picture"
          />
        </div>
        <div className="player-info">
          <h4 className="player-info_player-name bg-customblue/20  border border-gray-300 -sm rounded-lg ">
            Player4
          </h4>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
            className="player-info_player-picture"
          />
        </div>
        <p className="text-center mt-3"> Dueño de la reserva:</p>
        <p className="text-center font-bold"> Alejandro</p>
      </div>
    </BookingDetailStyled>
  );
};

export default BookingDetail;
