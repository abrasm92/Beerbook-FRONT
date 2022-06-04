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
    loadingOn: (ui: UI) => ({ ...ui, loading: true }),
    loadingOff: (ui: UI) => ({ ...ui, loading: false }),
    openAlertDone: (ui: UI, action: PayloadAction<string>) => ({
      ...ui,
      text: action.payload,
      alertDone: true,
    }),
    closeAlertDone: (ui: UI) => ({ ...ui, text: "", alertDone: false }),
    openAlertWrong: (ui: UI, action: PayloadAction<string>) => ({
      ...ui,
      text: action.payload,
      alertWrong: true,
    }),
    closeAlertWrong: (ui: UI) => ({ ...ui, text: "", alertWrong: false }),
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
