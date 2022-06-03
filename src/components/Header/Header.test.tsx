import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { userLogged } from "../../mocks/userMocks";
import { store } from "../../redux/store/store";
import Header from "./Header";

let mockUserState = { ...userLogged, logged: true };
jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => mockUserState,
}));

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a Header component", () => {
  describe("When it's instanciated", () => {
    test("Then it should show an image with a logo", () => {
      const imageAltText = "Beerbook logo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const image = screen.getByAltText(imageAltText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with user logged", () => {
    test("Then it should show button with 'Cerrar sesión' on content text", () => {
      jest.spyOn(Storage.prototype, "setItem").mockReturnThis();
      const expectButtonText = "Cerrar sesión";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const buttonText = screen.getByRole("button", {
        name: expectButtonText,
      });

      expect(buttonText).toHaveTextContent(expectButtonText);
    });
  });

  describe("When it's instantiated with unlogged user", () => {
    test("Then it should show button with 'Iniciar sesión' on content text", () => {
      const expectButtonText = "Iniciar sesión";
      mockUserState = { id: "", name: "", logged: false };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const buttonText = screen.getByRole("button", {
        name: expectButtonText,
      });
      userEvent.click(buttonText);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
