import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { customErrorApi } from "../../utils/customerrorApi";
import {
  deleteBeerActionCreator,
  editBeerActionCreator,
  getMaxPagesActionCreator,
  loadBeersActionCreator,
  loadSingleBeerActionCreator,
  setNumberPageActionCreator,
} from "../features/beerSlice";
import {
  closeAlertDoneActionCreator,
  closeAlertWrongActionCreator,
  loadingOffActionCreator,
  loadingOnActionCreator,
  openAlertDoneActionCreator,
  openAlertWrongActionCreator,
} from "../features/uiSlice";

export const loadBeersThunk =
  (page: number | any) => async (dispatch: Dispatch) => {
    const token = localStorage.getItem("token");
    const currentPage = +page - 1;
    try {
      dispatch(loadingOnActionCreator());
      const {
        data: { beersOnPage, totalPages: maxPages },
      } = await axios.get(
        `${process.env.REACT_APP_API_URL}beer/page/${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(loadBeersActionCreator(beersOnPage));
      dispatch(getMaxPagesActionCreator(maxPages));
      dispatch(setNumberPageActionCreator(currentPage));
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
        authorization: `Bearer ${token}`,
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

export const createBeerThunk =
  (newBeer: FormData) => async (dispatch: Dispatch) => {
    const token = localStorage.getItem("token");
    try {
      dispatch(loadingOnActionCreator());
      const {
        data: { message, beer },
      } = await axios.post(`${process.env.REACT_APP_API_URL}beer/`, newBeer, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch(loadingOffActionCreator());
      dispatch(openAlertDoneActionCreator(message));
      dispatch(loadSingleBeerActionCreator(beer));
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

export const getBeerByIdThunk =
  (id: string | undefined) => async (dispatch: Dispatch) => {
    const token = localStorage.getItem("token");
    try {
      dispatch(loadingOnActionCreator());
      const {
        data: { beer },
      } = await axios.get(`${process.env.REACT_APP_API_URL}beer/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch(loadingOffActionCreator());
      dispatch(loadSingleBeerActionCreator(beer));
    } catch (error: any) {
      dispatch(loadingOffActionCreator());
      const message = customErrorApi(error);
      dispatch(openAlertWrongActionCreator(message));
      setTimeout(() => {
        dispatch(closeAlertWrongActionCreator());
      }, 4500);
    }
  };

export const updateBeerThunk =
  (newBeer: FormData, id: string) => async (dispatch: Dispatch) => {
    const token = localStorage.getItem("token");
    try {
      dispatch(loadingOnActionCreator());
      const {
        data: { message, beer },
      } = await axios.put(
        `${process.env.REACT_APP_API_URL}beer/${id}`,
        newBeer,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(loadingOffActionCreator());
      dispatch(openAlertDoneActionCreator(message));
      dispatch(editBeerActionCreator(beer));
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

export const filterBeerThuk =
  (filter: string, filterValue: string, page: number | any) =>
  async (dispatch: Dispatch) => {
    const token = localStorage.getItem("token");
    const currentPage = +page - 1;
    try {
      dispatch(loadingOnActionCreator());
      const {
        data: { beersOnPage, totalPages: maxPages },
      } = await axios.get(
        `${process.env.REACT_APP_API_URL}beer/filter/${filter}/${filterValue}/${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(loadBeersActionCreator(beersOnPage));
      dispatch(getMaxPagesActionCreator(maxPages));
      dispatch(setNumberPageActionCreator(currentPage));
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
