import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteBeerThunk } from "../../redux/thunks/beerThunks";
import { BeerDataApi } from "../../types/interfaces";
import SingleBeerStyles from "./SingleBeerStyles";

type PropBeer = {
  beer: BeerDataApi;
  inHome: boolean;
};

const SingleBeer = ({ beer, inHome }: PropBeer): JSX.Element => {
  const { page } = useAppSelector((state) => state.beer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const detailBeer = () => {
    navigate(`/detalles-cerveza/${beer.id}`);
  };

  const deleteBeer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(deleteBeerThunk(beer.id));
    navigate(`/cervezas-del-mundo/page=${+page}`);
  };

  return (
    <SingleBeerStyles onClick={detailBeer}>
      <img
        src={beer.imageBackup}
        alt="Imagen de cerveza"
        width={60}
        height={125}
      />
      <div className="beer-info">
        <h2>{beer.name}</h2>
        <h3>
          {beer.brewery} · {beer.country}
        </h3>
        <p>
          {beer.style} · {beer.degrees}
        </p>
        {inHome === false && <button onClick={deleteBeer}>Eliminar</button>}
      </div>
    </SingleBeerStyles>
  );
};

export default SingleBeer;
