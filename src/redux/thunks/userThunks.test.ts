import axios from "axios";
import { loginUser, singleUser, userData } from "../../mocks/userMocks";
import { UserResponseApi } from "../../types/interfaces";
import {
  getUserByIdThunk,
  userLoginThunk,
  userRegisterThunk,
} from "./userThunks";

const userLoggedCredentials: UserResponseApi = {
  iat: 1234,
  id: "1234",
  username: "admin",
};
jest.mock("jwt-decode", () => () => userLoggedCredentials);

jest.useFakeTimers();

describe("Given a userRegisterThunk function", () => {
  describe("When it's invoked and do right", () => {
    test("Then it should call dispatch'", async () => {
      axios.post = jest.fn().mockResolvedValue({ status: 201 });
      const dispatch = jest.fn();
      const thunk = userRegisterThunk(singleUser);
      const expectCalls = 4;

      await thunk(dispatch);

      jest.runOnlyPendingTimers();

      expect(dispatch).toHaveBeenCalledTimes(expectCalls);
    });
  });

  describe("When it's invoked with exist user", () => {
    test("Then it should call dispatch", async () => {
      axios.post = jest.fn().mockRejectedValue({
        status: 409,
        response: {
          status: 409,
          data: {
            message: "Este usuario ya existe",
          },
        },
      });
      const dispatch = jest.fn();
      const thunk = userRegisterThunk(singleUser);
      const expectCalls = 4;

      await thunk(dispatch);

      jest.runOnlyPendingTimers();

      expect(dispatch).toHaveBeenCalledTimes(expectCalls);
    });
  });

  describe("When it's invoked and do right but with wrong status", () => {
    test("Then it should call dispatch'", async () => {
      axios.post = jest.fn().mockResolvedValue({ status: 204 });
      const dispatch = jest.fn();
      const thunk = userRegisterThunk(singleUser);
      const expectCalls = 4;

      await thunk(dispatch);

      jest.runOnlyPendingTimers();

      expect(dispatch).toHaveBeenCalledTimes(expectCalls);
    });
  });
});

describe("Given a userLoginThunk function", () => {
  describe("When it's invoked and do right", () => {
    test("Then it should call dispatch'", async () => {
      jest.spyOn(Storage.prototype, "setItem").mockReturnThis();
      axios.post = jest
        .fn()
        .mockResolvedValue({ status: 200, data: { token: "token" } });
      const dispatch = jest.fn();
      const thunk = userLoginThunk(loginUser);
      const expectCalls = 5;

      await thunk(dispatch);

      jest.runOnlyPendingTimers();

      expect(dispatch).toHaveBeenCalledTimes(expectCalls);
    });
  });

  describe("When it's invoked with user", () => {
    test("Then it should call dispatch", async () => {
      axios.post = jest.fn().mockRejectedValue({
        status: 401,
        response: {
          status: 401,
          data: {
            message: "Usuario o contraseña incorrectos",
          },
        },
      });
      const thunk = userLoginThunk(singleUser);
      const dispatch = jest.fn();
      const expectCalls = 4;

      await thunk(dispatch);

      jest.runOnlyPendingTimers();

      expect(dispatch).toHaveBeenCalledTimes(expectCalls);
    });
  });
});

describe("Given a getUserByIdThunkfunction", () => {
  describe("When it's invoked and it works", () => {
    test("Then it should call dispatch 3 times", async () => {
      const dispatch = jest.fn();
      const id = "1234";
      const thunk = getUserByIdThunk(id);
      const expectedCalls = 3;
      axios.get = jest.fn().mockResolvedValue({ data: { userData } });

      await thunk(dispatch);
      jest.runOnlyPendingTimers();

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });

  describe("When it's invoked and it fails", () => {
    test("Then it should call dispatch 3 times", async () => {
      const dispatch = jest.fn();
      const id = "1234";
      const thunk = getUserByIdThunk(id);
      const expectedCalls = 4;
      axios.get = jest.fn().mockRejectedValue({
        status: 404,
        response: {
          status: 404,
          data: {
            message: "Usuario que busca no existe",
          },
        },
      });

      await thunk(dispatch);
      jest.runOnlyPendingTimers();

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});
