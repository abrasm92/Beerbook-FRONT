import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ListBeers from "../../components/ListBeers/ListBeers";
import SubHeader from "../../components/SubHeader/Subheader";
import { useAppDispatch } from "../../redux/hooks";
import { loadBeersThunk } from "../../redux/thunks/beerThunks";
import BeerListPageStyles from "./BeerListPageStyles";

const BeerListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { page } = useParams();

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
