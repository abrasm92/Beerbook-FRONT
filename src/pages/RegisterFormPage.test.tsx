import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import RegisterFormPage from "./RegisterFormPage";

describe("Given a ListPageRobots page", () => {
  describe("When it's rendered getting array with 2 objects on state", () => {
    test("Then it sould show two image of robots", () => {
      const expectedInputs = 4;

      render(
        <Provider store={store}>
          <RegisterFormPage />
        </Provider>
      );
      const numberTextsInputs = screen.getAllByRole("textbox");
      const passwordInput = screen.getAllByLabelText("Contraseña");
      const numberOfInputs = numberTextsInputs.length + passwordInput.length;

      expect(numberOfInputs).toBe(expectedInputs);
    });
  });
});
