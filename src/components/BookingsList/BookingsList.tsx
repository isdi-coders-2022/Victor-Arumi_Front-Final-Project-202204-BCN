import { IBooking } from "../../types/types";
import Booking from "../Booking/Booking";
import BookingsListStyled from "./BookingsListStyled";

interface Props {
  bookings: IBooking[];
}
const BookingsList = ({ bookings }: Props) => {
  return (
    <BookingsListStyled>
      {bookings.map((booking, position) => {
        return (
          <li key={position}>
            <Booking booking={booking} />
          </li>
        );
      })}
    </BookingsListStyled>
  );
};

export default BookingsList;
