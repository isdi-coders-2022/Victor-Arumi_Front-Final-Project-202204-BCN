import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";

interface Props {
  children: JSX.Element;
}

const LoginControl = ({ children }: Props): JSX.Element | null => {
  const { logged } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) navigate("/login");
  }, [logged, navigate]);

  if (logged) {
    return children;
  }
  return null;
};

export default LoginControl;
