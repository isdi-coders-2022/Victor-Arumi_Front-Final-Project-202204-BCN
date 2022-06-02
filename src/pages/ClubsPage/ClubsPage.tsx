import { Link } from "react-router-dom";

const ClubsPage = (): JSX.Element => {
  return (
    <>
      <h1>Aqui irán los clubs</h1>
      <Link className="" to={"/login"}>
        Iniciar sesión
      </Link>
    </>
  );
};

export default ClubsPage;
