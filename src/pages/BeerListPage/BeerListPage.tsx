import { useEffect } from "react";
import ListBeers from "../../components/ListBeers/ListBeers";
import SubHeader from "../../components/SubHeader/Subheader";
import { useAppDispatch } from "../../redux/hooks";
import loadBeersThunk from "../../redux/thunks/beerThunks";
import BeerListPageStyles from "./BeerListPageStyles";

const BeerListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(loadBeersThunk());
    })();
  }, [dispatch]);

  return (
    <>
      <SubHeader />
      <BeerListPageStyles>
        <ListBeers />
      </BeerListPageStyles>
    </>
  );
};

export default BeerListPage;
