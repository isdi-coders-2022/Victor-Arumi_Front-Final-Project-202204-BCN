import { Link } from "react-router-dom";

const BookingsPage = (): JSX.Element => {
  return (
    <>
      <h1>Aqui van las reservas</h1>
      <Link className="" to={"/login"}>
        Iniciar sesión
      </Link>
    </>
  );
};

export default BookingsPage;
