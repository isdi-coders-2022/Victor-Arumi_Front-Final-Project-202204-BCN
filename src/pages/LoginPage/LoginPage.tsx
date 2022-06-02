import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <LoginForm />
      <p>Si no tienes una cuenta</p>
      <Link className="" to={"/register"}>
        Regístrate
      </Link>
    </>
  );
};

export default LoginPage;
