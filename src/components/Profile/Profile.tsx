import ProfileStyles from "./ProfileStyles";

const Profile = (): JSX.Element => {
  return (
    <ProfileStyles>
      <div className="profile">
        <div className="profile--main-info">
          <img src="/images/default-profile-image.jpg" alt="imagen de perfil" />
          <div className="profile--main-info-text">
            <h2>NOMBRE Y APELLIDO</h2>
            <p>xx años · País</p>
          </div>
        </div>
        <p className="profile--edit">Editar perfil</p>
        <div className="profile--lists">
          <h3>Total aportaciones - 10</h3>
          <button>Ver aportaciones</button>
        </div>
        <div className="profile--lists">
          <h3>Mis favoritas - 23</h3>
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
