import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import Navbar from "./Navbar";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a Navbar component", () => {
  describe("When it's instantiated", () => {
    test("Then it sould show 3 image", () => {
      const expectTotalImage = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );
      const imagesLength = screen.getAllByRole("img");

      expect(imagesLength).toHaveLength(expectTotalImage);
    });
  });

  describe("When it's instantiated aun user clicks on home image", () => {
    test("Then it sould call navigate", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );
      const linkToHome = screen.getByAltText("Enlace a inicio");
      userEvent.click(linkToHome);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's instantiated aun user clicks on mainlist link", () => {
    test("Then it sould call navigate", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );
      const linkToHome = screen.getByAltText("Enlace a cervezas del mundo");
      userEvent.click(linkToHome);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's instantiated aun user clicks on profile link", () => {
    test("Then it sould call navigate", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );
      const linkToHome = screen.getByAltText("Enlace a mi perfil");
      userEvent.click(linkToHome);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
