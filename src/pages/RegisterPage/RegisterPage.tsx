import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <RegisterForm />
      <p className="text-center">Ya tienes una cuenta?</p>
      <Link className="text-center" to={"/login"}>
        Inicia sesión
      </Link>
    </>
  );
};

export default RegisterPage;
