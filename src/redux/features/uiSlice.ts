import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    openAlertDone: (ui: UI, action: PayloadAction<string>) => ({
      ...initialState,
      text: action.payload,
      alertDone: true,
    }),
    closeAlertDone: () => ({ ...initialState, text: "", alertDone: false }),
    openAlertWrong: (ui: UI, action: PayloadAction<string>) => ({
      ...initialState,
      text: action.payload,
      alertWrong: true,
    }),
    closeAlertWrong: () => ({ ...initialState, text: "", alertWrong: false }),
  },
});

export default uiSlice.reducer;

export const {
  loadingOn: loadingOnActionCreator,
  loadingOff: loadingOffActionCreator,
  openAlertDone: openAlertDoneActionCreator,
  closeAlertDone: closeAlertDoneActionCreator,
  openAlertWrong: openAlertWrongActionCreator,
  closeAlertWrong: closeAlertWrongActionCreator,
} = uiSlice.actions;
