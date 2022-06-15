import { useEffect } from "react";
import ListBeers from "../../components/ListBeers/ListBeers";
import SubHeader from "../../components/SubHeader/Subheader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getHomePageBeersThunk } from "../../redux/thunks/beerThunks";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import HomePageStyles from "./HomePageStyles";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.ui);
  const { listOfBeers } = useAppSelector((state) => state.beer);

  useEffect(() => {
    dispatch(getHomePageBeersThunk());
  }, [dispatch]);

  return (
    <>
      {!loading && listOfBeers.length !== 0 && (
        <>
          <SubHeader checkInHome={true} />
          <HomePageStyles>
            <ListBeers checkInHome={true} />
          </HomePageStyles>
        </>
      )}
      {!loading && listOfBeers.length === 0 && <NotFoundPage />}
    </>
  );
};

export default HomePage;
