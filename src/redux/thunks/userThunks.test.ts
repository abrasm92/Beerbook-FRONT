import axios from "axios";
import { loginUser, singleUser } from "../../mocks/userMocks";
import { UserResponseApi } from "../../types/interfaces";
import { userLoginThunk, userRegisterThunk } from "./userThunks";

const userLoggedCredentials: UserResponseApi = {
  iat: 1234,
  id: "1234",
  username: "admin",
};
jest.mock("jwt-decode", () => () => userLoggedCredentials);

describe("Given a userRegisterThunk function", () => {
  describe("When it's invoked and do right", () => {
    test("Then it should return a message 'Usuario creado'", async () => {
      axios.post = jest.fn().mockResolvedValue({ status: 201 });
      const expectedMessage = "Usuario creado";

      const message = await userRegisterThunk(singleUser);

      expect(message).toEqual(expectedMessage);
    });
  });

  describe("When it's invoked with exist user", () => {
    test("Then it should return a custom message", async () => {
      axios.post = jest.fn().mockRejectedValue({
        status: 409,
        response: {
          status: 409,
          data: {
            message: "Este usuario ya existe",
          },
        },
      });
      const expectedMessage = "Este usuario ya existe";

      const message = await userRegisterThunk(singleUser);

      expect(message).toEqual(expectedMessage);
    });
  });

  describe("When it's invoked and do right but with wrong status", () => {
    test("Then it should return a message 'Usuario creado'", async () => {
      axios.post = jest.fn().mockResolvedValue({ status: 204 });
      const expectedMessage = "";

      const message = await userRegisterThunk(singleUser);

      expect(message).toEqual(expectedMessage);
    });
  });
});

describe("Given a userLoginThunk function", () => {
  describe("When it's invoked and do right", () => {
    test("Then it should return a message 'Has iniciado sessión'", async () => {
      jest.spyOn(Storage.prototype, "setItem").mockReturnThis();
      axios.post = jest
        .fn()
        .mockResolvedValue({ status: 200, data: { token: "token" } });
      const dispatch = jest.fn();
      const thunk = userLoginThunk(loginUser);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked with user", () => {
    test("Then it should return a custom message", async () => {
      axios.post = jest.fn().mockRejectedValue({
        status: 401,
        response: {
          status: 401,
          data: {
            message: "Usuario o contraseña incorrectos",
          },
        },
      });
      const expectedMessage = "Usuario o contraseña incorrectos";
      const thunk = userLoginThunk(singleUser);
      const dispatch = jest.fn();

      const message = await thunk(dispatch);

      expect(message).toEqual(expectedMessage);
    });
  });
});
