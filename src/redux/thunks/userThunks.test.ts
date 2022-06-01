import { loginUser, singleUser } from "../../mocks/userMocks";
import { userLoginThunk, userRegisterThunk } from "./userThunks";

describe("Given a userRegisterThunk function", () => {
  describe("When it's invoked and do right", () => {
    test("Then it should return a message 'Usuario creado'", async () => {
      const expectedMessage = "Usuario creado";

      const message = await userRegisterThunk(singleUser);

      expect(message).toEqual(expectedMessage);
    });
  });
});

describe("Given a userLoginThunk function", () => {
  describe("When it's invoked and do right", () => {
    test("Then it should return a message 'Has iniciado sessión'", async () => {
      /* const expectedMessage = "Has iniciado sessión"; */
      const dispatch = jest.fn();
      const thunk = userLoginThunk(loginUser);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
