import { createSlice } from "@reduxjs/toolkit";
import { UI } from "../../types/interfaces";

const initialState: UI = {
  text: "",
  alertDone: false,
  alertWrong: false,
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loadingOn: () => ({ ...initialState, loading: true }),
    loadingOff: () => ({ ...initialState, loading: false }),
  },
});

export default uiSlice.reducer;

export const {
  loadingOn: loadingOnActionCreator,
  loadingOff: loadingOffActionCreator,
} = uiSlice.actions;
