import { useNavigate } from "react-router-dom";
import { BeerDataApi } from "../../types/interfaces";
import DetailBeerStyles from "./DetailBeerStyles";

type PropBeer = {
  beer: BeerDataApi;
};

const DetailBeer = ({ beer }: PropBeer): JSX.Element => {
  const navigate = useNavigate();

  return (
    <DetailBeerStyles>
      <img src="/images/Albino Squid Assassin.png" alt="Imagen de cerveza" />
      <div className="beer-info">
        <h2>{beer.name}</h2>
        <h3>
          {beer.brewery} · {beer.country}
        </h3>
        <p>
          {beer.style} · {beer.degrees}
        </p>
      </div>
    </DetailBeerStyles>
  );
};

export default DetailBeer;
