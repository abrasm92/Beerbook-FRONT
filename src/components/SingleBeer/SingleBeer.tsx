import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { deleteBeerThunk } from "../../redux/thunks/beerThunks";
import { BeerDataApi } from "../../types/interfaces";
import SingleBeerStyles from "./SingleBeerStyles";

type PropBeer = {
  beer: BeerDataApi;
};

const SingleBeer = ({ beer }: PropBeer): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const deleteBeer = () => {
    dispatch(deleteBeerThunk(beer.id));
  };

  const editBeer = () => {
    navigate(`/editar-cerveza/${beer.id}`);
  };

  return (
    <SingleBeerStyles>
      <img src="/images/Albino Squid Assassin.png" alt="Imagen de cerveza" />
      <div className="beer-info">
        <h2>{beer.name}</h2>
        <h3>
          {beer.brewery} · {beer.country}
        </h3>
        <p>
          {beer.style} · {beer.degrees}
        </p>
        <button onClick={deleteBeer}>Eliminar</button>
        <button onClick={editBeer}>Editar</button>
      </div>
    </SingleBeerStyles>
  );
};

export default SingleBeer;
