import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

type PropChildren = {
  children: JSX.Element;
};

const CheckNotLogged = ({ children }: PropChildren) => {
  const { logged } = useAppSelector((state) => state.user);
  debugger;
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/cervezas-del-mundo");
    }
  }, [logged, navigate]);

  if (!logged) {
    return children;
  } else {
    return null;
  }
};

export default CheckNotLogged;
