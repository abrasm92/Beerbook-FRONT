import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateEditBeerForm from "../../components/CreateEditBeerForm/CreateEditBeerForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getBeerByIdThunk } from "../../redux/thunks/beerThunks";
import EditBeerFormPageStyles from "./EditBeerFormPageStyles";

const EditBeerFormPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      await dispatch(getBeerByIdThunk(id));
    })();
  }, [dispatch, id]);
  const { singleBeer } = useAppSelector((state) => state.beer);
  return (
    <EditBeerFormPageStyles>
      <CreateEditBeerForm beer={singleBeer} />
    </EditBeerFormPageStyles>
  );
};

export default EditBeerFormPage;
