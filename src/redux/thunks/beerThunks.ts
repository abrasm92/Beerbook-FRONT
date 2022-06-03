import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { loadBeersActionCreator } from "../features/beerSlice";

const loadBeersThunk = () => async (dispatch: Dispatch) => {
  try {
    const {
      data: { beers },
    } = await axios.get(`${process.env.REACT_APP_API_URL}beer`);
    dispatch(loadBeersActionCreator(beers));
  } catch (error) {
    return error;
  }
};

export default loadBeersThunk;
