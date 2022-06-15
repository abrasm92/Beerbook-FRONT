import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListBeers from "../../components/ListBeers/ListBeers";
import SubHeader from "../../components/SubHeader/Subheader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadBeersThunk } from "../../redux/thunks/beerThunks";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import BeerListPageStyles from "./BeerListPageStyles";

type PageList = {
  currentPage: string;
};

const BeerListPage = ({ currentPage }: PageList): JSX.Element => {
  const dispatch = useAppDispatch();
  const { page }: any = useParams();
  const navigate = useNavigate();
  const { totalPages, listOfBeers, filter } = useAppSelector(
    (state) => state.beer
  );
  const { loading } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (page === "0" || page === "NaN") {
      navigate(`/${currentPage}/page=1`);
    } else {
      switch (currentPage) {
        case "cervezas-del-mundo":
          if (filter.status === true) {
            return;
          } else {
            dispatch(loadBeersThunk(page));
          }
          break;
      }
      dispatch(loadBeersThunk(page));
    }
  }, [currentPage, dispatch, filter.status, navigate, page]);

  const previewPage = () => {
    navigate(`/${currentPage}/page=${+page - 1}`);
  };

  const nextPage = () => {
    navigate(`/${currentPage}/page=${+page + 1}`);
  };

  return (
    <>
      {listOfBeers.length !== 0 && !loading && (
        <>
          <SubHeader checkInHome={false} />
          <BeerListPageStyles>
            <ListBeers checkInHome={false} />
            <div className="buttons-pagination">
              {page > 1 && <button onClick={previewPage}>{"<"}</button>}
              {page <= 1 && (
                <button
                  onClick={previewPage}
                  disabled={true}
                  className="button--off"
                >
                  {"<"}
                </button>
              )}
              {page < totalPages && <button onClick={nextPage}>{">"}</button>}
              {page >= totalPages && (
                <button
                  onClick={nextPage}
                  disabled={true}
                  className="button--off"
                >
                  {">"}
                </button>
              )}
            </div>
          </BeerListPageStyles>
        </>
      )}
      {listOfBeers.length === 0 && !loading && <NotFoundPage />}
    </>
  );
};

export default BeerListPage;
