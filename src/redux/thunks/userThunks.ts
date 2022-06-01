import axios, { AxiosError } from "axios";
import { customErrorApi } from "../../utils/customerrorApi";

interface User {
  name: string;
  username: string;
  email: string;
  password: string;
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
