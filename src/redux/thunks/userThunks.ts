import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { LoginUser, User } from "../../types/interfaces";
import { customErrorApi } from "../../utils/customerrorApi";
import { userLoginActionCreator } from "../features/userSlice";
import jwt_decode from "jwt-decode";

interface ApiToken {
  iat: number;
  id: string;
  username: string;
}

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
      const {
        status,
        data: { token },
      } = await axios.post(`${process.env.REACT_APP_API_URL}user/login`, user);
      debugger;
      if (status === 200) {
        const message: string = "Has iniciado sessión";
        const { username, id }: ApiToken = jwt_decode(token);
        dispatch(userLoginActionCreator({ name: username, id }));
        localStorage.setItem("token", token);
        return message;
      }
    } catch (error: AxiosError | any) {
      if (AxiosError) {
        const message = customErrorApi(error);
        return message;
      }
    }
  };
