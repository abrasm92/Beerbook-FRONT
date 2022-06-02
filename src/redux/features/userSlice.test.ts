import { BasicUser, UserState } from "../../types/interfaces";
import userReducer, { userLoginActionCreator } from "./userSlice";

describe("Given a userSlice", () => {
  describe("When it's invoked with userLoginActionCreator", () => {
    test("Then it should change state", () => {
      jest.spyOn(Storage.prototype, "setItem").mockReturnThis();
      const user: BasicUser = {
        name: "admin",
        id: "1",
      };
      const userLogged: UserState = {
        name: "admin",
        id: "1",
        logged: true,
      };
      const initialState: UserState = {
        name: "",
        id: "",
        logged: true,
      };

      const action = userLoginActionCreator(user);

      const recivedValue = userReducer(initialState, action);

      expect(recivedValue).toEqual(userLogged);
    });
  });
});
