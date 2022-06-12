import { useNavigate } from "react-router-dom";
import { BeerDataApi } from "../../types/interfaces";
import SingleBeerStyles from "./SingleBeerStyles";

type PropBeer = {
  beer: BeerDataApi;
  inHome: Boolean;
};

const SingleBeer = ({ beer, inHome }: PropBeer): JSX.Element => {
  const navigate = useNavigate();

  const detailBeer = () => {
    navigate(`/detalles-cerveza/${beer.id}`);
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
        {inHome && <button>Eliminar</button>}
      </div>
    </SingleBeerStyles>
  );
};

export default SingleBeer;
