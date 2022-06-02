import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

type PropChildren = {
  children: JSX.Element;
};

const CheckLogged = ({ children }: PropChildren) => {
  const { logged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  if (logged) {
    return children;
  } else {
    return null;
  }
};

export default CheckLogged;
