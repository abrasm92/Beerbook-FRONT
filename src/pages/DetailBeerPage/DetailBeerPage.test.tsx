import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { groupOfBeer, singleBeer } from "../../mocks/beerMocks";
import DetailBeerPage from "./DetailBeerPage";

describe("Given a DetailBeerPage component", () => {
  describe("When it's instantiated with singleBeer.id on params", () => {
    test("Then it should show an image on screen with alt text 'Imagen de cerveza'", async () => {
      const beerMockSlice = createSlice({
        name: "beer",
        initialState: {
          page: 0,
          listOfBeers: groupOfBeer,
          singleBeer: singleBeer,
        },
        reducers: {},
      });
      const uiMockSlice = createSlice({
        name: "ui",
        initialState: {
          loading: false,
        },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { beer: beerMockSlice.reducer, ui: uiMockSlice.reducer },
      });
      const mockId = `${singleBeer.id}`;
      jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useParams: () => ({
          id: mockId,
        }),
      }));
      const altText = "Imagen de cerveza";

      await render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <DetailBeerPage />
          </Provider>
        </BrowserRouter>
      );

      const image = screen.getByAltText(altText);

      expect(image).toBeInTheDocument();
    });
  });
});
