import { groupOfBeer } from "../../mocks/beerMocks";
import SingleBeer from "../SingleBeer/SingleBeer";
import ListBeersStyles from "./ListBeersStyles";

const ListBeers = (): JSX.Element => {
  const array = groupOfBeer;
  return (
    <ListBeersStyles>
      {array.map((beer) => (
        <SingleBeer beer={beer} key={beer.id} />
      ))}
    </ListBeersStyles>
  );
};

export default ListBeers;
