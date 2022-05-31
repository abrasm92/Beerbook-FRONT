import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const userRegisterThunk = (user: User) => async (dispatch: Dispatch) => {
  try {
    const { status } = await axios.post(
      `${process.env.REACT_APP_API_URL}user/register`,
      user
    );
    debugger;
    if (status === 201) {
      return "Usuario creado";
    }
  } catch (error: AxiosError | any) {
    debugger;
    const {
      response: {
        status,
        data: { message },
      },
    } = error;
    if (status === 400) {
      return message;
    }
    if (status === 409) {
      return message;
    }
    if (status === 500) {
      return message;
    }
  }
};
