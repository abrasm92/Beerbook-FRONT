import axios from "axios";
import jwtDecode from "jwt-decode";
import { Dispatch } from "redux";
import { LoginUser, User, UserResponseApi } from "../../types/interfaces";
import { customErrorApi } from "../../utils/customerrorApi";
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
    } else {
      throw new Error();
    }
  } catch (error: any) {
    return customErrorApi(error);
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
      dispatch(userLoginActionCreator({ name: username, id }));

      localStorage.setItem("token", token);
    } catch (error: any) {
      return customErrorApi(error);
    }
  };
