import { useEffect } from "react";
import ListBeers from "../../components/ListBeers/ListBeers";
import SubHeader from "../../components/SubHeader/Subheader";
import { useAppDispatch } from "../../redux/hooks";
import { getHomePageBeersThunk } from "../../redux/thunks/beerThunks";
import HomePageStyles from "./HomePageStyles";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHomePageBeersThunk());
  }, [dispatch]);

  return (
    <>
      <SubHeader checkInHome={true} />
      <HomePageStyles>
        <ListBeers checkInHome={true} />
      </HomePageStyles>
    </>
  );
};

export default HomePage;
