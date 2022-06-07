import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateEditBeerForm from "../../components/CreateEditBeerForm/CreateEditBeerForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getBeerByIdThunk } from "../../redux/thunks/beerThunks";
import EditBeerFormPageStyles from "./EditBeerFormPageStyles";

const EditBeerFormPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { singleBeer } = useAppSelector((state) => state.beer);
  useEffect(() => {
    dispatch(getBeerByIdThunk(id));
  }, [dispatch, id]);

  return (
    <EditBeerFormPageStyles>
      {singleBeer.name && <CreateEditBeerForm beer={singleBeer} />}
    </EditBeerFormPageStyles>
  );
};

export default EditBeerFormPage;
