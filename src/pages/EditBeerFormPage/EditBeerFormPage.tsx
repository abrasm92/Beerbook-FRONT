import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateEditBeerForm from "../../components/CreateEditBeerForm/CreateEditBeerForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getBeerByIdThunk } from "../../redux/thunks/beerThunks";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import EditBeerFormPageStyles from "./EditBeerFormPageStyles";

const EditBeerFormPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { singleBeer } = useAppSelector((state) => state.beer);
  const { loading } = useAppSelector((state) => state.ui);
  useEffect(() => {
    dispatch(getBeerByIdThunk(id));
  }, [dispatch, id]);

  return (
    <>
      {!loading && (
        <EditBeerFormPageStyles>
          {singleBeer.name && <CreateEditBeerForm beer={singleBeer} />}
        </EditBeerFormPageStyles>
      )}
      {!singleBeer.name && !loading && <NotFoundPage />}
    </>
  );
};

export default EditBeerFormPage;
