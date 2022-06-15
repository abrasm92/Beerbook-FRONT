import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { singleBeer } from "../../mocks/beerMocks";
import { store } from "../../redux/store/store";
import SingleBeer from "./SingleBeer";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a SingleBeer component", () => {
  describe("When it's instantiated with a beer", () => {
    test("Then it should show heading with a name of beer", () => {
      const nameBeer = singleBeer.name;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SingleBeer beer={singleBeer} inHome={true} />
          </Provider>
        </BrowserRouter>
      );
      const nameHeader = screen.getByRole("heading", { level: 2 });

      expect(nameHeader).toHaveTextContent(nameBeer);
    });
  });

  describe("When it's instantiated with a beer and user click on them", () => {
    test("Then it should show call navigate with '/detalles-cerveza/IDBEER'", () => {
      const idBeer = singleBeer.id;
      const expectNavigate = `/detalles-cerveza/${idBeer}`;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SingleBeer beer={singleBeer} inHome={true} />
          </Provider>
        </BrowserRouter>
      );

      const beerTag = screen.getByRole("listitem");
      userEvent.click(beerTag);

      expect(mockedUsedNavigate).toHaveBeenCalledWith(expectNavigate);
    });
  });

  describe("When it's instantiated and it can't rendeir image but have backupImage", () => {
    test("Then it should show change src to backup value '1234'", () => {
      const beer = singleBeer;
      beer.imageBackup = "1234";
      beer.image = "wrong path";
      const imageName = "Imagen de cerveza";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SingleBeer beer={singleBeer} inHome={true} />
          </Provider>
        </BrowserRouter>
      );

      const image = screen.getByAltText(imageName);
      fireEvent.error(image);

      expect(image).toHaveProperty("src", "http://localhost/1234");
      expect(image).toHaveProperty("onerror", null);
    });
  });

  describe("When it's instantiated and it can't rendeir image but haven't backupImage", () => {
    test("Then it should show change src to backup value '/images/producto-sin-imagen.jpg'", () => {
      const beer = singleBeer;
      beer.imageBackup = "";
      beer.image = "wrong path";
      const imageName = "Imagen de cerveza";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SingleBeer beer={singleBeer} inHome={true} />
          </Provider>
        </BrowserRouter>
      );

      const image = screen.getByAltText(imageName);
      fireEvent.error(image);

      expect(image).toHaveProperty(
        "src",
        "http://localhost/images/producto-sin-imagen.jpg"
      );
      expect(image).toHaveProperty("onerror", null);
    });
  });
});
