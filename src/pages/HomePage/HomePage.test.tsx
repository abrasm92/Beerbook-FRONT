import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { groupOfBeer, singleBeer } from "../../mocks/beerMocks";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list element", () => {
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
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "admin", id: "admin", logged: true },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: {
          beer: beerMockSlice.reducer,
          ui: uiMockSlice.reducer,
          user: userMockSlice.reducer,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const listElement = screen.getByRole("list");

      expect(listElement).toBeInTheDocument();
    });
  });

  describe("When it's rendered withoud beers on state", () => {
    test("Then it should show a list element", () => {
      const altTextImage = "404";
      const beerMockSlice = createSlice({
        name: "beer",
        initialState: {
          page: 0,
          listOfBeers: [],
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

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const expectedImage = screen.getByAltText(altTextImage);

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
