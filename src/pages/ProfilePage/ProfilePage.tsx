import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserByIdThunk } from "../../redux/thunks/userThunks";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProfilePageStyles from "./ProfilePageStyles";

const ProfilePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id, data } = useAppSelector((state) => state.user);
  const { loading } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (id !== "") {
      dispatch(getUserByIdThunk(id));
    } else {
      return;
    }
  }, [dispatch, id]);

  const navigate = useNavigate();

  const goToCreate = () => {
    navigate("/crear-cerveza");
  };

  return (
    <>
      {data.name && !loading && (
        <ProfilePageStyles>
          <Profile user={data} />
          <button className="profile--button-add-beer" onClick={goToCreate}>
            Agregar una cerveza
          </button>
        </ProfilePageStyles>
      )}
      {!data.name && !loading && <NotFoundPage />}
    </>
  );
};

export default ProfilePage;
