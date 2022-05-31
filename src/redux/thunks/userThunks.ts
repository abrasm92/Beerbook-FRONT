import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const userRegisterThunk = (user: User) => async (dispatch: Dispatch) => {
  await axios.post(`${process.env.REACT_APP_LOCAL}user/register`, user);
};
