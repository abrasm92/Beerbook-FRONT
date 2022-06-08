import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListBeers from "../../components/ListBeers/ListBeers";
import SubHeader from "../../components/SubHeader/Subheader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadBeersThunk } from "../../redux/thunks/beerThunks";
import BeerListPageStyles from "./BeerListPageStyles";

const BeerListPage = (): JSX.Element => {
  debugger;
  const dispatch = useAppDispatch();
  const { page }: any = useParams();
  const navigate = useNavigate();
  const { totalPages } = useAppSelector((state) => state.beer);

  useEffect(() => {
    dispatch(loadBeersThunk(page));
  }, [dispatch, page]);

  const previewPage = () => {
    if (+page === 1) {
      navigate(`/cervezas-del-mundo/page=${+page}`);
    } else {
      navigate(`/cervezas-del-mundo/page=${+page - 1}`);
    }
  };

  const nextPage = () => {
    if (+page < totalPages) {
      navigate(`/cervezas-del-mundo/page=${+page + 1}`);
    } else {
      navigate(`/cervezas-del-mundo/page=${+page}`);
    }
  };

  return (
    <>
      <SubHeader />
      <BeerListPageStyles>
        <ListBeers />
        <div className="buttons-pagination">
          <button onClick={previewPage}>{"<"}</button>
          <button onClick={nextPage}>{">"}</button>
        </div>
      </BeerListPageStyles>
    </>
  );
};

export default BeerListPage;
