import reactTestRenderer from "react-test-renderer";
import LoadingModal from "./LoadingModal";

describe("Given a AlertModal componet", () => {
  describe("When it's rendered", () => {
    test("Then it should show always the same as snapshot", () => {
      const modal = reactTestRenderer.create(<LoadingModal />);

      expect(modal).toMatchSnapshot();
    });
  });
});
