import { IBooking } from "../../types/types";
import Booking from "../Booking/Booking";
import BookingsListSyled from "./BookingsListStyled";

interface Props {
  bookings: IBooking[];
}
const BookingsList = ({ bookings }: Props) => {
  return (
    <BookingsListSyled>
      {bookings.map((booking, position) => {
        return (
          <li key={position}>
            <Booking booking={booking} />
          </li>
        );
      })}
    </BookingsListSyled>
  );
};

export default BookingsList;
