import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicUser, UserState } from "../../types/interfaces";

const initialState: UserState = {
  name: "",
  id: "",
  logged: false,
  data: {
    name: "",
    username: "",
    email: "",
    image: null,
    creations: NaN,
    favorites: NaN,
    age: NaN,
    country: "",
    admin: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (user: UserState, action: PayloadAction<BasicUser>) => ({
      ...user,
      name: action.payload.name,
      id: action.payload.id,
      logged: true,
    }),
    userLogout: () => initialState,
  },
});

export default userSlice.reducer;

export const {
  userLogin: userLoginActionCreator,
  userLogout: userLogoutActionCreator,
} = userSlice.actions;
