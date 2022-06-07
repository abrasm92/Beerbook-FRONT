import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type PropChildren = {
  children: JSX.Element;
};

const CheckLogged = ({ children }: PropChildren) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/iniciar-sesion");
    }
  }, [token, navigate]);

  if (token) {
    return children;
  } else {
    return null;
  }
};

export default CheckLogged;
