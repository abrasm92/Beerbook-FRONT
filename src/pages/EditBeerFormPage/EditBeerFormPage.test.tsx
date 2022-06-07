import { Provider } from "react-redux";
import reactTestRenderer from "react-test-renderer";
import { store } from "../../redux/store/store";
import EditBeerFormPage from "./EditBeerFormPage";

describe("Given a EditBeerFormPage component", () => {
  describe("When it's rendered", () => {
    test("Then it sould show button to editBeer", () => {
      const editForm = reactTestRenderer.create(
        <Provider store={store}>
          <EditBeerFormPage />
        </Provider>
      );

      expect(editForm).toMatchSnapshot();
    });
  });
});
