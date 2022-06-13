import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store/store";
import { UserResponseApi } from "./types/interfaces";

const userLoggedCredentials: UserResponseApi = {
  iat: 1234,
  id: "1234",
  username: "admin",
};
jest.mock("jwt-decode", () => () => userLoggedCredentials);

describe("Given an App component", () => {
  describe("When it's instantiated with a token in local storage", () => {
    test("Then it should show a list item", () => {
      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: jest.fn(() => "token"),
        },
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });

  describe("When it's instantiated without a token in local storage", () => {
    test("Then it should show a list item", () => {
      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: jest.fn(() => null),
        },
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const linkProfile = screen.getByAltText("Enlace a mi perfil");
      userEvent.click(linkProfile);
      const inputsLogin = screen.getAllByRole("button", {
        name: "Iniciar sesión",
      });

      expect(inputsLogin).toHaveLength(2);
    });
  });
});
