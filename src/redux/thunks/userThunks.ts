import axios from "axios";
import jwtDecode from "jwt-decode";
import { Dispatch } from "redux";
import { LoginUser, User, UserResponseApi } from "../../types/interfaces";
import { customErrorApi } from "../../utils/customerrorApi";
import {
  closeAlertDoneActionCreator,
  closeAlertWrongActionCreator,
  openAlertDoneActionCreator,
  openAlertWrongActionCreator,
} from "../features/uiSlice";
import { userLoginActionCreator } from "../features/userSlice";

export const userRegisterThunk = (user: User) => async (dispatch: Dispatch) => {
  try {
    const { status } = await axios.post(
      `${process.env.REACT_APP_API_URL}user/register`,
      user
    );
    if (status === 201) {
      const message: string = "Usuario creado";
      dispatch(openAlertDoneActionCreator(message));
      setTimeout(() => {
        dispatch(closeAlertDoneActionCreator());
      }, 4500);
    } else {
      throw new Error();
    }
  } catch (error: any) {
    const message = customErrorApi(error);
    dispatch(openAlertWrongActionCreator(message));
    setTimeout(() => {
      dispatch(closeAlertWrongActionCreator());
    }, 4500);
  }
};

export const userLoginThunk =
  (user: LoginUser) => async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}user/login`,
        user
      );
      const token: string = data.token;
      const { username, id }: UserResponseApi = jwtDecode(token);
      const message: string = `Bienvenido ${username}`;
      dispatch(userLoginActionCreator({ name: username, id }));
      dispatch(openAlertDoneActionCreator(message));
      setTimeout(() => {
        dispatch(closeAlertDoneActionCreator());
      }, 4500);

      localStorage.setItem("token", token);
    } catch (error: any) {
      const message = customErrorApi(error);
      dispatch(openAlertWrongActionCreator(message));
      setTimeout(() => {
        dispatch(closeAlertWrongActionCreator());
      }, 4500);
    }
  };
