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
import CreateBeerFormPage from "./pages/CreateBeerFormPage/CreateBeerFormPage";
import DetailBeerPage from "./pages/DetailBeerPage/DetailBeerPage";
import EditBeerFormPage from "./pages/EditBeerFormPage/EditBeerFormPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginFormPage from "./pages/LoginPage/LoginFormPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
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
          path="/cervezas-del-mundo/page=:page"
          element={
            <CheckLogged>
              <BeerListPage />
            </CheckLogged>
          }
        />
        <Route
          path="/crear-cerveza"
          element={
            <CheckLogged>
              <CreateBeerFormPage />
            </CheckLogged>
          }
        />
        <Route
          path="/editar-cerveza/:id"
          element={
            <CheckLogged>
              <EditBeerFormPage />
            </CheckLogged>
          }
        />
        <Route
          path="/detalles-cerveza/:id"
          element={
            <CheckLogged>
              <DetailBeerPage />
            </CheckLogged>
          }
        />
        <Route
          path="/mi-perfil"
          element={
            <CheckLogged>
              <ProfilePage />
            </CheckLogged>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/error-404" element={<NotFoundPage />} />
        <Route path="/*" element={<Navigate replace to="/error-404" />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
