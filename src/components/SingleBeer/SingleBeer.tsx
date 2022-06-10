import { useNavigate } from "react-router-dom";
import { BeerDataApi } from "../../types/interfaces";
import SingleBeerStyles from "./SingleBeerStyles";

type PropBeer = {
  beer: BeerDataApi;
};

const SingleBeer = ({ beer }: PropBeer): JSX.Element => {
  const navigate = useNavigate();

  const detailBeer = () => {
    navigate(`/detalles-cerveza/${beer.id}`);
  };

  return (
    <SingleBeerStyles onClick={detailBeer}>
      <img src={beer.imageBackup} alt="Imagen de cerveza" />
      <div className="beer-info">
        <h2>{beer.name}</h2>
        <h3>
          {beer.brewery} · {beer.country}
        </h3>
        <p>
          {beer.style} · {beer.degrees}
        </p>
      </div>
    </SingleBeerStyles>
  );
};

export default SingleBeer;
