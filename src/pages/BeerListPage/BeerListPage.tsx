import ListBeers from "../../components/ListBeers/ListBeers";
import SubHeader from "../../components/SubHeader/Subheader";
import BeerListPageStyles from "./BeerListPageStyles";

const BeerListPage = (): JSX.Element => {
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
