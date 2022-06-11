import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicUser, UserData, UserState } from "../../types/interfaces";

const initialState: UserState = {
  name: "",
  id: "",
  logged: false,
  data: {
    name: "",
    username: "",
    email: "",
    image: null,
    imageBackup: null,
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
    getUserData: (user: UserState, action: PayloadAction<UserData>) => ({
      ...user,
      data: action.payload,
    }),
  },
});

export default userSlice.reducer;

export const {
  userLogin: userLoginActionCreator,
  userLogout: userLogoutActionCreator,
  getUserData: getUserDataActionCreator,
} = userSlice.actions;
