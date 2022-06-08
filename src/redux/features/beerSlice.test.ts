import { groupOfBeer, singleBeer } from "../../mocks/beerMocks";
import { BeerState } from "../../types/interfaces";
import beerReducer, {
  createBeerActionCreator,
  deleteBeerActionCreator,
  loadBeersActionCreator,
} from "./beerSlice";

describe("Given a beerSlice", () => {
  describe("When it's invoked loadBeersActionCreator", () => {
    test("Then it should change state of listOfBeers from [] to array with list of beers", () => {
      const expectList = groupOfBeer;
      const initialState: BeerState = {
        listOfBeers: [],
        page: 0,
        totalPages: 0,
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
      };

      const action = loadBeersActionCreator(groupOfBeer);

      const recivedValue = beerReducer(initialState, action);
      expect(recivedValue.listOfBeers).toEqual(expectList);
    });
  });

  describe("When it's invoked deleteBeerActionCreator", () => {
    test("Then it should change state of listOfBeers from [] to array with list of beers", () => {
      const expectList = [
        {
          id: "6297a8369ab4b03687f15b73",
          name: "Breakfast Stout",
          brewery: "Founders",
          style: "Imperial Stout",
          degrees: 8.3,
          IBU: 60,
          country: "EEUU",
          description:
            "Cerveza negra con gran espuma color marrón con arómas predominantes a …",
          image: "",
          owner: "",
        },
        {
          id: "6297a8369ab4b03687f15b7a",
          name: "Ginette Natural Christmas",
          brewery: "Brasserie La Binchoise",
          style: "Belgian Strong Ale",
          degrees: 8.5,
          IBU: NaN,
          country: "Bélgica",
          description:
            "Cerveza rojiza oscura con espuma densa, cuerpo medio suave y aromatica…",
          image: "",
          owner: "",
        },
      ];
      const initialState: BeerState = {
        listOfBeers: groupOfBeer,
        page: 0,
        totalPages: 0,
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
      };

      const action = deleteBeerActionCreator(groupOfBeer[0].id);

      const recivedValue = beerReducer(initialState, action);

      expect(recivedValue.listOfBeers).toEqual(expectList);
    });
  });

  describe("When it's invoked createBeerActionCreator", () => {
    test("Then it should change state of listOfBeers from [] to array with list of beers and new beer", () => {
      const expectList = groupOfBeer.concat(singleBeer);
      const initialState: BeerState = {
        listOfBeers: groupOfBeer,
        page: 0,
        totalPages: 0,
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
      };

      const action = createBeerActionCreator(singleBeer);

      const recivedValue = beerReducer(initialState, action);

      expect(recivedValue.listOfBeers).toEqual(expectList);
    });
  });
});
