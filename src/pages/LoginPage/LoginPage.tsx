import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <LoginForm />
      <p className="text-center">Si no tienes una cuenta</p>
      <Link className="text-center" to={"/register"}>
        Regístrate
      </Link>
    </>
  );
};

export default LoginPage;
