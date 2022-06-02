import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <RegisterForm />
      <p>Ya tienes una cuenta?</p>
      <Link className="" to={"/login"}>
        Inicia sesión
      </Link>
    </>
  );
};

export default RegisterPage;
