import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CheckLogged from "./components/CheckLogged/CheckLogged";
import CheckNotLogged from "./components/CheckNotLogged/CheckNotLogged";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AlertErrorModal from "./modals/AlertErrorModal/AlertErrorModal";
import AlertModal from "./modals/AlertModal/AlertModal";
import LoadingModal from "./modals/LoadingModal/LoadingModal";
import BeerListPage from "./pages/BeerListPage/BeerListPage";
import CreateEditBeerFormPage from "./pages/CreateEditBeerFormPage/CreateEditBeerFormPage";
import LoginFormPage from "./pages/LoginPage/LoginFormPage";
import RegisterFormPage from "./pages/RegisterPage/RegisterFormPage";
import { userLoginActionCreator } from "./redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { UserResponseApi } from "./types/interfaces";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      const { username, id }: UserResponseApi = jwtDecode(token);

      dispatch(userLoginActionCreator({ name: username, id }));
    }
  }, [dispatch, token]);

  const { alertDone, alertWrong, text, loading } = useAppSelector(
    (state) => state.ui
  );

  return (
    <>
      {loading && <LoadingModal />}
      {alertDone && <AlertModal text={text} />}
      {alertWrong && <AlertErrorModal text={text} />}
      <Header />

      <Routes>
        <Route
          path="/iniciar-sesion"
          element={
            <CheckNotLogged>
              <LoginFormPage />
            </CheckNotLogged>
          }
        />
        <Route
          path="/registro"
          element={
            <CheckNotLogged>
              <RegisterFormPage />
            </CheckNotLogged>
          }
        />
        <Route
          path="/cervezas-del-mundo"
          element={
            <CheckLogged /*  path="/cervezas-del-mundo" */>
              <BeerListPage />
            </CheckLogged>
          }
        />
        <Route
          path="/crear-cerveza"
          element={
            <CheckLogged /* path="/crear-cerveza" */>
              <CreateEditBeerFormPage />
            </CheckLogged>
          }
        />
        <Route
          path="/editar-cerveza/:id"
          element={
            <CheckLogged /* path="/editar-cerveza/:id" */>
              <CreateEditBeerFormPage />
            </CheckLogged>
          }
        />
        <Route path="/" element={<Navigate replace to="/iniciar-sesion" />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
