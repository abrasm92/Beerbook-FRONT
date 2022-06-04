import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { customErrorApi } from "../../utils/customerrorApi";
import { loadBeersActionCreator } from "../features/beerSlice";
import {
  closeAlertWrongActionCreator,
  loadingOffActionCreator,
  loadingOnActionCreator,
  openAlertWrongActionCreator,
} from "../features/uiSlice";

const loadBeersThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(loadingOnActionCreator());
    const {
      data: { beers },
    } = await axios.get(`${process.env.REACT_APP_API_URL}beer`);
    dispatch(loadBeersActionCreator(beers));
    dispatch(loadingOffActionCreator());
  } catch (error: any) {
    dispatch(loadingOffActionCreator());
    const message = customErrorApi(error);
    dispatch(openAlertWrongActionCreator(message));
    setTimeout(() => {
      dispatch(closeAlertWrongActionCreator());
    }, 4500);
  }
};

export default loadBeersThunk;
