import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SingleBeer from "./components/SingleBeer/SingleBeer";
import { groupOfBeer } from "./mocks/beerMocks";
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
      const beerMockSlice = createSlice({
        name: "beer",
        initialState: {
          page: 0,
          listOfBeers: groupOfBeer,
          singleBeer: SingleBeer,
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
        initialState: { name: "admin", id: "1234", logged: true },
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
            <App />
          </Provider>
        </BrowserRouter>
      );

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
