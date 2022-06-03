import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { loadBeersActionCreator } from "../features/beerSlice";

const loadBeersThunk = () => async (dispatch: Dispatch) => {
  try {
    const { data: listOfBeers } = await axios.get(
      `${process.env.REACT_APP_API_URL}beer`
    );
    dispatch(loadBeersActionCreator(listOfBeers));
  } catch (error) {
    return error;
  }
};

export default loadBeersThunk;
