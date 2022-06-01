import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicUser, UserState } from "../../types/interfaces";

const initialState: UserState = {
  name: "",
  id: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (user: UserState, action: PayloadAction<BasicUser>) => ({
      ...action.payload,
      logged: true,
    }),
  },
});

export default userSlice.reducer;

export const { userLogin: userLoginActionCreator } = userSlice.actions;
