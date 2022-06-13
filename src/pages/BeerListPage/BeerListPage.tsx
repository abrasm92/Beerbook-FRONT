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

  useEffect(() => {
    if (page === "0" || page === "NaN") {
      navigate(`/${currentPage}/page=1`);
    } else {
      switch (currentPage) {
        case "cervezas-del-mundo":
          if (filter.status === true) {
          } else {
            dispatch(loadBeersThunk(page));
          }
      }
      dispatch(loadBeersThunk(page));
    }
  }, [currentPage, dispatch, filter.status, navigate, page]);

  const previewPage = () => {
    if (+page === 1) {
      navigate(`/${currentPage}/page=${+page}`);
    } else {
      navigate(`/${currentPage}/page=${+page - 1}`);
    }
  };

  const nextPage = () => {
    if (+page < totalPages) {
      navigate(`/${currentPage}/page=${+page + 1}`);
    } else {
      navigate(`/${currentPage}/page=${+page}`);
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
