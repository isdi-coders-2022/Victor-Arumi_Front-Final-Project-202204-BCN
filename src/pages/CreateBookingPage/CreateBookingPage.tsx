import BookingForm from "../../components/BookingForm/BookingForm";
import { useAppSelector } from "../../redux/store/hooks";

const CreateBookingPage = (): JSX.Element => {
  const { id: userId, username } = useAppSelector((state) => state.user);
  const usernames = [username ?? ""];

  const newBookingStartingValues = {
    id: "",
    club: "",
    owner: userId ?? "",
    date: "",
    hour: "",
    courtType: "Indoor",
    players: [userId ?? ""],
    open: true,
  };

  return (
    <div className="bg-customblue/20">
      <h2 className="text-center my-5 text-3xl">Crear reserva</h2>
      <BookingForm booking={newBookingStartingValues} usernames={usernames} />
    </div>
  );
};

export default CreateBookingPage;
