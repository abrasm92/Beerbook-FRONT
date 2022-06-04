import { BasicUser, UserState } from "../../types/interfaces";
import userReducer, {
  userLoginActionCreator,
  userLogoutActionCreator,
} from "./userSlice";

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
        data: {
          name: "",
          username: "",
          email: "",
          image: null,
          creations: NaN,
          favorites: NaN,
          age: NaN,
          country: "",
          admin: false,
        },
      };
      const initialState: UserState = {
        name: "",
        id: "",
        logged: false,
        data: {
          name: "",
          username: "",
          email: "",
          image: null,
          creations: NaN,
          favorites: NaN,
          age: NaN,
          country: "",
          admin: false,
        },
      };

      const action = userLoginActionCreator(user);

      const recivedValue = userReducer(initialState, action);

      expect(recivedValue).toEqual(userLogged);
    });
  });

  describe("When it's invoked with userLogoutActionCreator", () => {
    test("Then it should change state", () => {
      jest.spyOn(Storage.prototype, "setItem").mockReturnThis();

      const initialState: UserState = {
        name: "admin",
        id: "1",
        logged: true,
        data: {
          name: "",
          username: "",
          email: "",
          image: null,
          creations: NaN,
          favorites: NaN,
          age: NaN,
          country: "",
          admin: false,
        },
      };
      const unLoggedUser: UserState = {
        name: "",
        id: "",
        logged: false,
        data: {
          name: "",
          username: "",
          email: "",
          image: null,
          creations: NaN,
          favorites: NaN,
          age: NaN,
          country: "",
          admin: false,
        },
      };

      const action = userLogoutActionCreator();

      const recivedValue = userReducer(initialState, action);

      expect(recivedValue).toEqual(unLoggedUser);
    });
  });
});
