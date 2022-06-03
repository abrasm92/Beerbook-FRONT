import { useAppSelector } from "../../redux/hooks";
import SingleBeer from "../SingleBeer/SingleBeer";
import ListBeersStyles from "./ListBeersStyles";

const ListBeers = (): JSX.Element => {
  const { listOfBeers } = useAppSelector((state) => state.beer);
  return (
    <ListBeersStyles>
      {listOfBeers.map((beer) => (
        <SingleBeer beer={beer} key={beer.id} />
      ))}
    </ListBeersStyles>
  );
};

export default ListBeers;
