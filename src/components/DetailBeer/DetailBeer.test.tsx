import { configureStore, createSlice } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { groupOfBeer, singleBeer } from "../../mocks/beerMocks";
import { store } from "../../redux/store/store";
import DetailBeer from "./DetailBeer";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a DetailBeer component", () => {
  describe("When it's rendered and user click on edit button", () => {
    test("Then it shold call navigate with", () => {
      const beer = singleBeer;
      const buttonName = "Editar";
      const expectPath = `/editar-cerveza/${singleBeer.id}`;
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "admin", id: "admin", logged: true },
        reducers: {},
      });
      const beerMockSlice = createSlice({
        name: "beer",
        initialState: {
          page: 0,
          listOfBeers: groupOfBeer,
          singleBeer: {},
        },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: {
          user: userMockSlice.reducer,
          beer: beerMockSlice.reducer,
        },
      });
      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <DetailBeer beer={beer} />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: buttonName });
      userEvent.click(button);

      expect(mockedUsedNavigate).toHaveBeenCalledWith(expectPath);
    });
  });

  describe("When it's rendered and user click on delete button", () => {
    test("Then it shold call navigate with", () => {
      const beer = singleBeer;
      const buttonName = "Eliminar";
      const mockId = 1;
      jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useParams: () => ({
          page: mockId,
        }),
      }));

      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "admin", id: "admin", logged: true },
        reducers: {},
      });
      const beerMockSlice = createSlice({
        name: "beer",
        initialState: {
          page: 0,
          listOfBeers: groupOfBeer,
          singleBeer: {},
        },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: {
          user: userMockSlice.reducer,
          beer: beerMockSlice.reducer,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <DetailBeer beer={beer} />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: buttonName });
      userEvent.click(button);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's rendered but img canT render first image", () => {
    test("Then it should render imag with src with '1234' value", () => {
      const beer = singleBeer;
      beer.imageBackup = "1234";
      beer.image = "wrong path";
      const imageName = "Imagen de cerveza";
      const mockId = 1;
      jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useParams: () => ({
          page: mockId,
        }),
      }));

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailBeer beer={beer} />
          </Provider>
        </BrowserRouter>
      );

      const image = screen.getByAltText(imageName);
      fireEvent.error(image);

      expect(image).toHaveProperty("src", "http://localhost/1234");
      expect(image).toHaveProperty("onerror", null);
    });
  });

  describe("When it's rendered but img can't render first image and don't have backup", () => {
    test("Then it should render imag with src with '/images/producto-sin-imagen.jpg' value", () => {
      const beer = singleBeer;
      beer.imageBackup = "";
      beer.image = "wrong path";
      const imageName = "Imagen de cerveza";
      const mockId = 1;
      jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useParams: () => ({
          page: mockId,
        }),
      }));

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailBeer beer={beer} />
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
