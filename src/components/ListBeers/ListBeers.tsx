import { useAppSelector } from "../../redux/hooks";
import SingleBeer from "../SingleBeer/SingleBeer";
import ListBeersStyles from "./ListBeersStyles";

type InHome = {
  checkInHome: Boolean;
};

const ListBeers = ({ checkInHome }: InHome): JSX.Element => {
  const { listOfBeers } = useAppSelector((state) => state.beer);

  return (
    <ListBeersStyles>
      {listOfBeers.map((beer) => (
        <SingleBeer beer={beer} key={beer.id} inHome={checkInHome} />
      ))}
    </ListBeersStyles>
  );
};

export default ListBeers;
