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
    </DetailBeerStyles>
  );
};

export default DetailBeer;
