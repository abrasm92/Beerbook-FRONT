import { configureStore } from "@reduxjs/toolkit";
import beerReducer from "../features/beerSlice";
import uiReducer from "../features/uiSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    beer: beerReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
