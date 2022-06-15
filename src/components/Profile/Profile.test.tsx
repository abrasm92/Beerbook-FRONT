import { userData } from "../../mocks/userMocks";
import Profile from "./Profile";
import reactTestRenderer from "react-test-renderer";

describe("Given a Profile componet", () => {
  describe("When it's rendered", () => {
    test("Then it should show always the same as snapshot", () => {
      const profile = reactTestRenderer.create(<Profile user={userData} />);

      expect(profile).toMatchSnapshot();
    });
  });
});
