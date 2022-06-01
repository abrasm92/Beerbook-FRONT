import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import RegisterFormPage from "./RegisterFormPage";

describe("Given a RegisterFormPage component", () => {
  describe("When it's rendered", () => {
    test("Then it sould show 4 formylary controllers", () => {
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
