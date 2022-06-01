import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { LoginUser, User, UserResponseApi } from "../../types/interfaces";
import { customErrorApi } from "../../utils/customerrorApi";
import jwt_decode from "jwt-decode";
import { userLoginActionCreator } from "../features/userSlice";

export const userRegisterThunk = async (user: User) => {
  try {
    const { status } = await axios.post(
      `${process.env.REACT_APP_API_URL}user/register`,
      user
    );
    if (status === 201) {
      const message: string = "Usuario creado";
      return message;
    }
  } catch (error: AxiosError | any) {
    if (AxiosError) {
      const message = customErrorApi(error);
      return message;
    }
  }
};

export const userLoginThunk =
  (user: LoginUser) => async (dispatch: Dispatch) => {
    try {
      const { status, data } = await axios.post(
        `${process.env.REACT_APP_API_URL}user/login`,
        user
      );
      if (status === 200) {
        const message: string = "Has iniciado sessión";
        const token = data.token;
        const { username, id }: UserResponseApi = jwt_decode(token);
        localStorage.setItem("token", token);
        dispatch(userLoginActionCreator({ name: username, id }));
        debugger;
        return message;
      }
    } catch (error: AxiosError | any) {
      if (AxiosError) {
        const message = customErrorApi(error);
        return message;
      }
    }
  };
