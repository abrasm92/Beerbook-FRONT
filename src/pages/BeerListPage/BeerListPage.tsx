import { useEffect } from "react";
import ListBeers from "../../components/ListBeers/ListBeers";
import SubHeader from "../../components/SubHeader/Subheader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadBeersThunk } from "../../redux/thunks/beerThunks";
import BeerListPageStyles from "./BeerListPageStyles";

const BeerListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.beer);

  useEffect(() => {
    (async () => {
      await dispatch(loadBeersThunk(page));
    })();
  }, [dispatch, page]);

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
