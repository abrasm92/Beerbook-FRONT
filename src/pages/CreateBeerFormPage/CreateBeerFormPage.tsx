import CreateEditBeerForm from "../../components/CreateEditBeerForm/CreateEditBeerForm";
import { useAppSelector } from "../../redux/hooks";
import CreateBeerFormPageStyles from "./CreateBeerFormPageStyles";

const CreateBeerFormPage = (): JSX.Element => {
  const { loading } = useAppSelector((state) => state.ui);
  return (
    <>
      {!loading && (
        <CreateBeerFormPageStyles>
          <CreateEditBeerForm beer={null} />
        </CreateBeerFormPageStyles>
      )}
    </>
  );
};

export default CreateBeerFormPage;
