import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { groupOfBeer } from "../../mocks/beerMocks";
import { store } from "../../redux/store/store";
import { BeerDataApi } from "../../types/interfaces";
import ListBeers from "./ListBeers";

let mockBeer: BeerDataApi[] = [];
jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => ({
    listOfBeers: mockBeer,
    page: 0,
    singleBeer: {
      name: "",
      brewery: "",
      style: "",
      degrees: 0,
      IBU: null,
      country: "",
      description: null,
      image: null,
      owner: null,
      id: "",
    },
  }),
}));
describe("Given a ListBeer component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a list of beers", () => {
      mockBeer = groupOfBeer;
      const expectListItems = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ListBeers />
          </Provider>
        </BrowserRouter>
      );
      const listItems = screen.getAllByRole("listitem");

      expect(listItems).toHaveLength(expectListItems);
    });
  });
});
