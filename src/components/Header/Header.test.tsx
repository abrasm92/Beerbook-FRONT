import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import Header from "./Header";

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => ({ name: "admin", id: "1234", logged: true }),
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
});
