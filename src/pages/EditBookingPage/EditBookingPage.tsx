import { useParams } from "react-router-dom";
import BookingForm from "../../components/BookingForm/BookingForm";
import { useAppSelector } from "../../redux/store/hooks";

const EditBookingPage = (): JSX.Element => {
  const bookings = useAppSelector((state) => state.bookings);
  const { id } = useParams();
  const bookingToEdit: any = bookings.find((booking) => booking.id === id);

  const bookingPlayersUsernames: string[] = [
    "jugadorsito1",
    "jugadorsito2",
    "ale galan",
    "auuuuuuha",
  ];

  return (
    <div className="bg-customblue/20">
      <h2 className="text-center my-5 text-3xl">Editar reserva</h2>
      <BookingForm
        booking={bookingToEdit}
        usernames={bookingPlayersUsernames}
      />
    </div>
  );
};

export default EditBookingPage;
