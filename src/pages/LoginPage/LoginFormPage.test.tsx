import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import LoginFormPage from "./LoginFormPage";

describe("Given a LoginFormPage component", () => {
  describe("When it's rendered", () => {
    test("Then it sould show a 'Iniciar sesión' button", () => {
      const screenButtonLogin = "Iniciar sesión";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginFormPage />
          </Provider>
        </BrowserRouter>
      );
      const buttonLogin = screen.getByRole("button", {
        name: screenButtonLogin,
      });

      expect(buttonLogin).toBeInTheDocument();
    });
  });
});
