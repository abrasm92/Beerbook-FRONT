import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { groupOfBeer } from "../../mocks/beerMocks";
import BeerListPage from "../../pages/BeerListPage/BeerListPage";
import { BeerDataApi, BeerState } from "../../types/interfaces";
import CheckLogged from "./CheckLogged";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a CheckLogged component", () => {
  describe("When it's instantiated with user not logged", () => {
    test("Then it should call navigate to redirect", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "", id: "", logged: false },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <CheckLogged>
              <BeerListPage />
            </CheckLogged>
          </Provider>
        </BrowserRouter>
      );

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's instantiated with user logged", () => {
    test("Then it should show a list item from list page", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "admin", id: "1234", logged: true },
        reducers: {},
      });

      const beerMockSlice = createSlice({
        name: "beer",
        initialState: {
          listOfBeers: groupOfBeer,
          page: 0,
          singleBeer: {
            name: "",
            brewery: "",
            style: "",
            degrees: 0,
            IBU: NaN,
            country: "",
            description: "",
            image: "",
            owner: "",
            id: "",
          },
        },
        reducers: {
          loadBeers: (
            beer: BeerState,
            action: PayloadAction<BeerDataApi[]>
          ): BeerState => ({
            ...beer,
            listOfBeers: action.payload,
          }),
        },
      });

      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer, beer: beerMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <CheckLogged>
              <BeerListPage />
            </CheckLogged>
          </Provider>
        </BrowserRouter>
      );

      const listItem = screen.getByRole("list");

      expect(listItem).toBeInTheDocument();
    });
  });
});
