import CreateEditBeerForm from "../../components/CreateEditBeerForm/CreateEditBeerForm";
import EditBeerFormPageStyles from "./EditBeerFormPageStyles";

const EditBeerFormPage = (): JSX.Element => {
  return (
    <EditBeerFormPageStyles>
      <CreateEditBeerForm />
    </EditBeerFormPageStyles>
  );
};

export default EditBeerFormPage;
