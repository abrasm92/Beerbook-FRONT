import { createSlice } from "@reduxjs/toolkit";
import { beerState } from "../../types/interfaces";

const initialState: beerState = {
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
