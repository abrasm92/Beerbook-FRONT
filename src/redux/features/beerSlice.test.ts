import { groupOfBeer, singleBeer } from "../../mocks/beerMocks";
import { BeerState } from "../../types/interfaces";
import beerReducer, {
  createBeerActionCreator,
  deleteBeerActionCreator,
  editBeerActionCreator,
  getMaxPagesActionCreator,
  loadBeersActionCreator,
  loadSingleBeerActionCreator,
  setNumberPageActionCreator,
} from "./beerSlice";

describe("Given a beerSlice", () => {
  describe("When it's invoked loadBeersActionCreator", () => {
    test("Then it should change state of listOfBeers from [] to array with list of beers", () => {
      const expectList = groupOfBeer;
      const initialState: BeerState = {
        listOfBeers: [],
        page: 0,
        totalPages: 0,
        filter: {
          status: false,
          type: "",
          value: "",
        },
        favoritesList: false,
        creationsList: false,
        generalList: true,
        singleBeer: {
          name: "",
          brewery: "",
          style: "",
          degrees: 0,
          IBU: NaN,
          country: "",
          description: "",
          image: "",
          imageBackup: "",
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
          imageBackup: "",
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
          imageBackup: "",
          owner: "",
        },
      ];
      const initialState: BeerState = {
        listOfBeers: groupOfBeer,
        page: 0,
        totalPages: 0,
        filter: {
          status: false,
          type: "",
          value: "",
        },
        favoritesList: false,
        creationsList: false,
        generalList: true,
        singleBeer: {
          name: "",
          brewery: "",
          style: "",
          degrees: 0,
          IBU: NaN,
          country: "",
          description: "",
          image: "",
          imageBackup: "",
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
        filter: {
          status: false,
          type: "",
          value: "",
        },
        favoritesList: false,
        creationsList: false,
        generalList: true,
        singleBeer: {
          name: "",
          brewery: "",
          style: "",
          degrees: 0,
          IBU: NaN,
          country: "",
          description: "",
          image: "",
          imageBackup: "",
          owner: "",
          id: "",
        },
      };

      const action = createBeerActionCreator(singleBeer);

      const recivedValue = beerReducer(initialState, action);

      expect(recivedValue.listOfBeers).toEqual(expectList);
    });
  });

  describe("When it's invoked loadSingleBeerActionCreator", () => {
    test("Then it should change state of singleBeer to same with a new valors of propierties as new load beer", () => {
      const expectState = singleBeer;
      const initialState: BeerState = {
        listOfBeers: groupOfBeer,
        page: 0,
        totalPages: 0,
        filter: {
          status: false,
          type: "",
          value: "",
        },
        favoritesList: false,
        creationsList: false,
        generalList: true,
        singleBeer: {
          name: "",
          brewery: "",
          style: "",
          degrees: 0,
          IBU: NaN,
          country: "",
          description: "",
          image: "",
          imageBackup: "",
          owner: "",
          id: "",
        },
      };

      const action = loadSingleBeerActionCreator(singleBeer);

      const recivedValue = beerReducer(initialState, action);

      expect(recivedValue.singleBeer).toEqual(expectState);
    });
  });

  describe("When it's invoked editBeerActionCreator", () => {
    test("Then it should change state of listOfBeers from [] to array with list of beers and new beer", () => {
      const updatedBeer = { ...singleBeer, name: "hola" };
      const expectList = groupOfBeer.filter((beer) =>
        beer.id === updatedBeer.id ? updatedBeer : beer
      );
      const initialState: BeerState = {
        listOfBeers: groupOfBeer,
        page: 0,
        totalPages: 0,
        filter: {
          status: false,
          type: "",
          value: "",
        },
        favoritesList: false,
        creationsList: false,
        generalList: true,
        singleBeer: {
          name: "",
          brewery: "",
          style: "",
          degrees: 0,
          IBU: NaN,
          country: "",
          description: "",
          image: "",
          imageBackup: "",
          owner: "",
          id: "",
        },
      };

      const action = editBeerActionCreator(updatedBeer);

      const recivedValue = beerReducer(initialState, action);

      expect(recivedValue.listOfBeers).toEqual(expectList);
    });
  });

  describe("When it's invoked getMaxPagesActionCreator", () => {
    test("Then it should change state of totalPages to the new valor", () => {
      const expectPages = 2;
      const initialState: BeerState = {
        listOfBeers: groupOfBeer,
        page: 0,
        totalPages: 0,
        filter: {
          status: false,
          type: "",
          value: "",
        },
        favoritesList: false,
        creationsList: false,
        generalList: true,
        singleBeer: {
          name: "",
          brewery: "",
          style: "",
          degrees: 0,
          IBU: NaN,
          country: "",
          description: "",
          image: "",
          imageBackup: "",
          owner: "",
          id: "",
        },
      };

      const action = getMaxPagesActionCreator(expectPages);

      const recivedValue = beerReducer(initialState, action);

      expect(recivedValue.totalPages).toEqual(expectPages);
    });
  });

  describe("When it's invoked setNumberPageActionCreator", () => {
    test("Then it should change state of page to the new valor", () => {
      const expectPage = 2;
      const initialState: BeerState = {
        listOfBeers: groupOfBeer,
        page: 0,
        totalPages: 0,
        filter: {
          status: false,
          type: "",
          value: "",
        },
        favoritesList: false,
        creationsList: false,
        generalList: true,
        singleBeer: {
          name: "",
          brewery: "",
          style: "",
          degrees: 0,
          IBU: NaN,
          country: "",
          description: "",
          image: "",
          imageBackup: "",
          owner: "",
          id: "",
        },
      };

      const action = setNumberPageActionCreator(expectPage);

      const recivedValue = beerReducer(initialState, action);

      expect(recivedValue.page).toEqual(expectPage);
    });
  });
});
