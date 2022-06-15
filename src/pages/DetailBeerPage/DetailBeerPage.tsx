import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailBeer from "../../components/DetailBeer/DetailBeer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getBeerByIdThunk } from "../../redux/thunks/beerThunks";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import DetailBeerPageStyles from "./DetailBeerPageStyles";

const DetailBeerPage = (): JSX.Element => {
  const { loading } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      await dispatch(getBeerByIdThunk(id));
    })();
  }, [dispatch, id]);
  const { singleBeer } = useAppSelector((state) => state.beer);
  return (
    <>
      {singleBeer.name !== "" && (
        <DetailBeerPageStyles>
          <DetailBeer beer={singleBeer} />
        </DetailBeerPageStyles>
      )}
      {!singleBeer.name && !loading && <NotFoundPage />}
    </>
  );
};

export default DetailBeerPage;
