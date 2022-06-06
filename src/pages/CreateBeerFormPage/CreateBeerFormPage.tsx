import CreateEditBeerForm from "../../components/CreateEditBeerForm/CreateEditBeerForm";
import CreateBeerFormPageStyles from "./CreateBeerFormPageStyles";

const CreateBeerFormPage = (): JSX.Element => {
  return (
    <CreateBeerFormPageStyles>
      <CreateEditBeerForm />
    </CreateBeerFormPageStyles>
  );
};

export default CreateBeerFormPage;
