import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListBeers from "../../components/ListBeers/ListBeers";
import SubHeader from "../../components/SubHeader/Subheader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadBeersThunk } from "../../redux/thunks/beerThunks";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import BeerListPageStyles from "./BeerListPageStyles";

const BeerListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { page }: any = useParams();
  const navigate = useNavigate();
  const { totalPages, listOfBeers } = useAppSelector((state) => state.beer);

  useEffect(() => {
    if (page === "0" || page === "NaN") {
      navigate(`/cervezas-del-mundo/page=1`);
    } else {
      dispatch(loadBeersThunk(page));
    }
  }, [dispatch, navigate, page]);

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
      {listOfBeers.length !== 0 && (
        <>
          <SubHeader checkInHome={false} />
          <BeerListPageStyles>
            <ListBeers checkInHome={false} />
            <div className="buttons-pagination">
              <button onClick={previewPage}>{"<"}</button>
              <button onClick={nextPage}>{">"}</button>
            </div>
          </BeerListPageStyles>
        </>
      )}
      {listOfBeers.length === 0 && <NotFoundPage />}
    </>
  );
};

export default BeerListPage;
