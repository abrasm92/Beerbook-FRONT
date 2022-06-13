import { useEffect } from "react";
import Profile from "../../components/Profile/Profile";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserByIdThunk } from "../../redux/thunks/userThunks";
import ProfilePageStyles from "./ProfilePageStyles";

const ProfilePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id, data } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (id !== "") {
      dispatch(getUserByIdThunk(id));
    } else {
      return;
    }
  }, [dispatch, id]);

  return (
    <ProfilePageStyles>
      {data.name && <Profile user={data} />}
    </ProfilePageStyles>
  );
};

export default ProfilePage;
