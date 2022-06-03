import { groupOfBeer } from "../../mocks/beerMocks";
import { BeerState } from "../../types/interfaces";
import beerReducer, { loadBeersActionCreator } from "./beerSlice";

describe("Given a beerSlice", () => {
  describe("When it's invoked loadBeersActionCreator", () => {
    test("Then it should change state of listOfBeers from [] to array with list of beers", () => {
      const expectList = groupOfBeer;
      const initialState: BeerState = {
        listOfBeers: [],
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
      };

      const action = loadBeersActionCreator(groupOfBeer);

      const recivedValue = beerReducer(initialState, action);
      expect(recivedValue.listOfBeers).toEqual(expectList);
    });
  });
});
