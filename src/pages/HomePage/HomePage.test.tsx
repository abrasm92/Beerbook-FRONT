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

      const listElement = screen.getByRole("list");

      expect(listElement).toBeInTheDocument();
    });
  });
});
