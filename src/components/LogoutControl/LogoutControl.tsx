import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";

interface Props {
  children: JSX.Element;
}

const LogoutControl = ({ children }: Props) => {
  const { logged } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (logged) navigate("/bookings");
  }, [logged, navigate]);

  if (!logged) {
    return children;
  }
  return null;
};

export default LogoutControl;
