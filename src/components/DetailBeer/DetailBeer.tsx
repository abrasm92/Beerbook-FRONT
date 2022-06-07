import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { deleteBeerThunk } from "../../redux/thunks/beerThunks";
import { BeerDataApi } from "../../types/interfaces";
import DetailBeerStyles from "./DetailBeerStyles";

type PropBeer = {
  beer: BeerDataApi;
};

const DetailBeer = ({ beer }: PropBeer): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const deleteBeer = () => {
    dispatch(deleteBeerThunk(beer.id));
    navigate("/cervezas-del-mundo");
  };
  const editBeer = () => {
    navigate(`/editar-cerveza/${beer.id}`);
  };

  return (
    <DetailBeerStyles>
      <div className="detail-beer--general-info">
        <img src="/images/Albino Squid Assassin.png" alt="Imagen de cerveza" />
        <div className="beer-info">
          <img src="/images/like-off.svg" alt="favorite-icon" />
          <h2>{beer.name}</h2>
          <h3>Fabricante: {beer.brewery}</h3>
          <h3>País: {beer.country}</h3>
          <p>Estilo: {beer.style}</p>
          <p>Grados: {beer.degrees}º</p>
          <p>IBU: {beer.IBU ? `${beer.IBU}%` : ` N/A`}</p>
        </div>
      </div>
      <section className="detail-beer--description">
        <p>Acerca de: </p>
        <p>{beer.description}</p>
      </section>
      <div className="detail-beer--buttons">
        <button onClick={deleteBeer}>Eliminar</button>
        <button onClick={editBeer}>Editar</button>
      </div>
    </DetailBeerStyles>
  );
};

export default DetailBeer;
