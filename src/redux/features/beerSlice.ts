import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BeerState, BeerDataApi } from "../../types/interfaces";

const initialState: BeerState = {
  listOfBeers: [],
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
  },
});

export default beerSlice.reducer;

export const {
  loadBeers: loadBeersActionCreator,
  deleteBeer: deleteBeerActionCreator,
  createBeer: createBeerActionCreator,
} = beerSlice.actions;
