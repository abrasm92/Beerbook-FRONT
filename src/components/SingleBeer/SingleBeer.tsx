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
  const { id } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const detailBeer = () => {
    navigate(`/detalles-cerveza/${beer.id}`);
  };

  const checkOwner = () => {
    if (id === beer.owner) {
      return true;
    } else {
      return false;
    }
  };

  const isOwner = checkOwner();

  const deleteBeer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(deleteBeerThunk(beer.id));
    navigate(`/cervezas-del-mundo/page=${+page}`);
  };

  const errorLocalImage = (error: any) => {
    let backupSrc = beer.imageBackup
      ? beer.imageBackup
      : "./images/producto-sin-imagen.jpg";
    (error.target as HTMLImageElement).onerror = null;
    (error.target as HTMLImageElement).src = backupSrc;
  };

  const url = process.env.REACT_APP_API_URL;

  return (
    <SingleBeerStyles onClick={detailBeer}>
      <img
        src={`${url}uploads/${beer.image}`}
        alt="Imagen de cerveza"
        width={60}
        height={125}
        onError={errorLocalImage}
      />
      <div className="beer-info">
        <h2>{beer.name}</h2>
        <h3>
          {beer.brewery} · {beer.country}
        </h3>
        <p>
          {beer.style} · {beer.degrees}
        </p>
        {inHome === false && isOwner && (
          <button onClick={deleteBeer}>Eliminar</button>
        )}
      </div>
    </SingleBeerStyles>
  );
};

export default SingleBeer;
