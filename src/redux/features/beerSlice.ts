import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BeerState, BeerDataApi } from "../../types/interfaces";

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
    IBU: 0,
    country: "",
    description: "",
    image: "",
    imageBackup: "",
    owner: "",
    id: "",
  },
};

const beerSlice = createSlice({
  name: "beer",
  initialState,
  reducers: {
    loadBeers: (
      beer: BeerState,
      action: PayloadAction<BeerDataApi[]>
    ): BeerState => ({
      ...beer,
      listOfBeers: action.payload,
    }),
    deleteBeer: (beer, action: PayloadAction<string>): BeerState => ({
      ...beer,
      listOfBeers: beer.listOfBeers.filter(
        (currentBeer) => currentBeer.id !== action.payload
      ),
    }),
    createBeer: (beer, action: PayloadAction<BeerDataApi>): BeerState => ({
      ...beer,
      listOfBeers: beer.listOfBeers.concat(action.payload),
      singleBeer: action.payload,
    }),
    loadSingleBeer: (beer, action: PayloadAction<BeerDataApi>): BeerState => ({
      ...beer,
      singleBeer: action.payload,
    }),
    editBeer: (beer, action: PayloadAction<BeerDataApi>): BeerState => ({
      ...beer,
      listOfBeers: beer.listOfBeers.filter((currentBeer) =>
        currentBeer.id === action.payload.id ? action.payload : currentBeer
      ),
    }),
    getMaxPages: (beer, action: PayloadAction<number>): BeerState => ({
      ...beer,
      totalPages: action.payload,
    }),
    setNumberPage: (beer, action: PayloadAction<number>): BeerState => ({
      ...beer,
      page: action.payload,
    }),
    changeFilterState: (beer) => ({
      ...beer,
      filter: { ...beer.filter, status: !beer.filter.status },
    }),
  },
});

export default beerSlice.reducer;

export const {
  loadBeers: loadBeersActionCreator,
  deleteBeer: deleteBeerActionCreator,
  createBeer: createBeerActionCreator,
  loadSingleBeer: loadSingleBeerActionCreator,
  editBeer: editBeerActionCreator,
  getMaxPages: getMaxPagesActionCreator,
  setNumberPage: setNumberPageActionCreator,
  changeFilterState: changeFilterStateActionCreator,
} = beerSlice.actions;
