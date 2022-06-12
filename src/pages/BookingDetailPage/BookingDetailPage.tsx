import BookingDetail from "../../components/BookingDetail/BookingDetail";
import mockBookings from "../../mocks/mockBookings";

const BookingDetailPage = (): JSX.Element => {
  return (
    <div className="bg-customblue/20 h-full flex flex-col items-center">
      <h2 className="text-center my-5 text-3xl">Detalle de la reserva</h2>
      <BookingDetail booking={mockBookings[0]} />
    </div>
  );
};

export default BookingDetailPage;
