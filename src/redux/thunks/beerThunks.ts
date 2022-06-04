import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { customErrorApi } from "../../utils/customerrorApi";
import {
  deleteBeerActionCreator,
  loadBeersActionCreator,
} from "../features/beerSlice";
import {
  closeAlertDoneActionCreator,
  closeAlertWrongActionCreator,
  loadingOffActionCreator,
  loadingOnActionCreator,
  openAlertDoneActionCreator,
  openAlertWrongActionCreator,
} from "../features/uiSlice";

export const loadBeersThunk = () => async (dispatch: Dispatch) => {
  const token = localStorage.getItem("token");
  try {
    dispatch(loadingOnActionCreator());
    const {
      data: { beers },
    } = await axios.get(`${process.env.REACT_APP_API_URL}beer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const deleteBeerThunk = (id: string) => async (dispatch: Dispatch) => {
  const token = localStorage.getItem("token");
  try {
    dispatch(loadingOnActionCreator());
    const {
      data: { message },
    } = await axios.delete(`${process.env.REACT_APP_API_URL}beer/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(loadingOffActionCreator());
    dispatch(openAlertDoneActionCreator(message));
    dispatch(deleteBeerActionCreator(id));
    setTimeout(() => {
      dispatch(closeAlertDoneActionCreator());
    }, 4500);
  } catch (error: any) {
    dispatch(loadingOffActionCreator());
    const message = customErrorApi(error);
    dispatch(openAlertWrongActionCreator(message));
    setTimeout(() => {
      dispatch(closeAlertWrongActionCreator());
    }, 4500);
  }
};
