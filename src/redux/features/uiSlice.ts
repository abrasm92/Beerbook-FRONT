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
  reducers: {},
});

export default uiSlice.reducer;
