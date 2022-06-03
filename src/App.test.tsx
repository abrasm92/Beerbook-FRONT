import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store/store";
import { UserResponseApi } from "./types/interfaces";

let mockUser = { name: "admin", id: "1234", logged: true };
jest.mock("./redux/hooks", () => ({
  ...jest.requireActual("./redux/hooks"),
  useAppSelector: () => mockUser,
}));
const userLoggedCredentials: UserResponseApi = {
  iat: 1234,
  id: "1234",
  username: "admin",
};
jest.mock("jwt-decode", () => () => userLoggedCredentials);

describe("Given an app component", () => {
  describe("When it's instantiated with user logged and user click on 'cerrar sesión' button", () => {
    test("Then it should show login form", () => {
      jest.spyOn(Storage.prototype, "setItem").mockReturnThis();
      const expectButtonText = "Cerrar sesión";
      const expectedInputs = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const buttonCloseSeason = screen.getByRole("button", {
        name: expectButtonText,
      });
      userEvent.click(buttonCloseSeason);
      const numberTextsInputs = screen.getAllByRole("textbox");
      const passwordInput = screen.getAllByLabelText("Contraseña");
      const numberOfInputs = numberTextsInputs.length + passwordInput.length;

      expect(numberOfInputs).toBe(expectedInputs);
    });
  });
});
