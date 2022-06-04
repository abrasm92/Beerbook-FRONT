import { UI } from "../../types/interfaces";
import uiReducer, {
  loadingOffActionCreator,
  loadingOnActionCreator,
} from "./uiSlice";

describe("Given a uiSlice", () => {
  describe("When it's invoked loadingOnActionCreator", () => {
    test("Then it should change state loading false to true", () => {
      const expectLoadingState = true;

      const initialState: UI = {
        text: "",
        alertDone: false,
        alertWrong: false,
        loading: false,
      };

      const action = loadingOnActionCreator();

      const recivedValue = uiReducer(initialState, action);
      expect(recivedValue.loading).toEqual(expectLoadingState);
    });
  });

  describe("When it's invoked loadingOffActionCreator", () => {
    test("Then it should change state loading true to false", () => {
      const expectLoadingState = false;

      const initialState: UI = {
        text: "",
        alertDone: false,
        alertWrong: false,
        loading: true,
      };

      const action = loadingOffActionCreator();

      const recivedValue = uiReducer(initialState, action);
      expect(recivedValue.loading).toEqual(expectLoadingState);
    });
  });
});
