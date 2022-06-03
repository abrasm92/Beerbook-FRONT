import { createSlice } from "@reduxjs/toolkit";
import { BeerState } from "../../types/interfaces";

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

const beerSlice = createSlice({
  name: "beer",
  initialState,
  reducers: {},
});

export default beerSlice.reducer;
