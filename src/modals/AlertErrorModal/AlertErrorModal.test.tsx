import reactTestRenderer from "react-test-renderer";
import AlertErrorModal from "./AlertErrorModal";

describe("Given a AlertModal componet", () => {
  describe("When it's rendered", () => {
    test("Then it should show always the same as snapshot", () => {
      const textModal = "text for test";

      const modal = reactTestRenderer.create(
        <AlertErrorModal text={textModal} />
      );

      expect(modal).toMatchSnapshot();
    });
  });
});
