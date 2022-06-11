import { UserData } from "../../types/interfaces";
import ProfileStyles from "./ProfileStyles";

type ProfileProp = {
  user: UserData;
};

const Profile = ({ user }: ProfileProp): JSX.Element => {
  return (
    <ProfileStyles>
      <div className="profile">
        <div className="profile--main-info">
          <img
            src={
              user.imageBackup
                ? user.imageBackup
                : "/images/default-profile-image.jpg"
            }
            alt="imagen de perfil"
          />
          <div className="profile--main-info-text">
            <h2>{user.name}</h2>
            <p>
              {user.age ? `${user.age} años` : ""}{" "}
              {user.age && user.country ? "·" : ""}{" "}
              {user.country ? user.country : ""}
            </p>
          </div>
        </div>
        <p className="profile--edit">Editar perfil</p>
        <div className="profile--lists">
          <h3>Total aportaciones - {user.creations}</h3>
          <button>Ver aportaciones</button>
        </div>
        <div className="profile--lists">
          <h3>Mis favoritas - {user.favorites}</h3>
          <button>Ver favoritas</button>
        </div>
        <button className="profile--button-add-beer">
          Agregar una cerveza
        </button>
      </div>
    </ProfileStyles>
  );
};

export default Profile;
