import { userData } from "../../mocks/userMocks";
import { BasicUser, UserState } from "../../types/interfaces";
import userReducer, {
  getUserDataActionCreator,
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
          imageBackup: null,
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
          imageBackup: null,
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
          imageBackup: null,
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
          imageBackup: null,
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

  describe("When it's invoked with getUserDataActionCreator", () => {
    test("Then it change data propiertie of state of user", () => {
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
          imageBackup: null,
          creations: NaN,
          favorites: NaN,
          age: NaN,
          country: "",
          admin: false,
        },
      };
      const expectedDataUser: UserState = {
        name: "admin",
        id: "1",
        logged: true,
        data: userData,
      };

      const action = getUserDataActionCreator(userData);

      const recivedValue = userReducer(initialState, action);

      expect(recivedValue).toEqual(expectedDataUser);
    });
  });
});
