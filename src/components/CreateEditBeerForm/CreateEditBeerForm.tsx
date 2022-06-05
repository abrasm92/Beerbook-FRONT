import { useEffect, useState } from "react";
import CreateEditBeerFormStyles from "./CreateEditBeerFormStyles";

const CreateEditBeerForm = (): JSX.Element => {
  const initialFormValue = {
    name: "",
    brewery: "",
    style: "",
    degrees: "",
    IBU: "",
    country: "",
    description: "",
    image: "",
  };

  const [userData, setUserData] = useState(initialFormValue);
  const [file, setFile] = useState(false);

  useEffect(() => {
    if (userData.image !== "") {
      setFile(true);
    }
  }, [userData.image]);

  const changeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setUserData(initialFormValue);
    setFile(false);
  };

  return (
    <CreateEditBeerFormStyles
      noValidate
      autoComplete="off"
      onSubmit={submitForm}
    >
      <label htmlFor="name">Nombre de la cerveza</label>
      <input
        type="text"
        id="name"
        value={userData.name}
        onChange={changeUserData}
        placeholder="Nombre de la cerveza"
      />
      <label htmlFor="brewery">Fabricante</label>
      <input
        type="text"
        id="brewery"
        value={userData.brewery}
        onChange={changeUserData}
        placeholder="Fabricante"
      />
      <label htmlFor="style">Estilo</label>
      <input
        type="text"
        id="style"
        value={userData.style}
        onChange={changeUserData}
        placeholder="Estilo"
      />
      <div className="formulary-number-inputs">
        <label htmlFor="IBU">IBU</label>
        <input
          type="number"
          id="IBU"
          value={userData.IBU}
          onChange={changeUserData}
          placeholder="IBU"
          className="number-input"
        />
        <label htmlFor="degrees">Grados</label>
        <input
          type="number"
          id="degrees"
          value={userData.degrees}
          onChange={changeUserData}
          placeholder="Grados"
          className="number-input"
        />
      </div>
      <label htmlFor="country">País</label>
      <input
        type="text"
        id="country"
        value={userData.country}
        onChange={changeUserData}
        placeholder="País"
      />
      <label htmlFor="description">Descripción</label>
      <textarea
        id="description"
        value={userData.description}
        /* onChange={changeUserData} */
        placeholder="Descripción"
      />
      <div className={file ? "fileUpload--On" : "fileUpload"}>
        <label htmlFor="country">Imagen</label>
        <input
          id="image"
          type="file"
          className="upload formulary--image-selector"
          required
          onChange={changeUserData}
        />
        <span>Imagen</span>
      </div>
      <button>Crear cerveza</button>
    </CreateEditBeerFormStyles>
  );
};

export default CreateEditBeerForm;
