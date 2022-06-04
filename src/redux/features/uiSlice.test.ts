import { UI } from "../../types/interfaces";
import uiReducer, {
  closeAlertDoneActionCreator,
  closeAlertWrongActionCreator,
  loadingOffActionCreator,
  loadingOnActionCreator,
  openAlertDoneActionCreator,
  openAlertWrongActionCreator,
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

  describe("When it's invoked openAlertDoneActionCreator", () => {
    test("Then it should change state alertDone false to true and modify text state", () => {
      const expectState: UI = {
        text: "Testing",
        alertDone: true,
        alertWrong: false,
        loading: false,
      };

      const initialState: UI = {
        text: "",
        alertDone: false,
        alertWrong: false,
        loading: false,
      };

      const action = openAlertDoneActionCreator("Testing");

      const recivedValue = uiReducer(initialState, action);
      expect(recivedValue).toEqual(expectState);
    });
  });

  describe("When it's invoked closeAlertDoneActionCreator", () => {
    test("Then it should change state alertDone true to false and modify text state", () => {
      const expectState: UI = {
        text: "",
        alertDone: false,
        alertWrong: false,
        loading: false,
      };

      const initialState: UI = {
        text: "Testing",
        alertDone: true,
        alertWrong: false,
        loading: false,
      };

      const action = closeAlertDoneActionCreator();

      const recivedValue = uiReducer(initialState, action);
      expect(recivedValue).toEqual(expectState);
    });
  });

  describe("When it's invoked openAlertWrongActionCreator", () => {
    test("Then it should change state alertWrong false to true and modify text state", () => {
      const expectState: UI = {
        text: "Testing",
        alertDone: false,
        alertWrong: true,
        loading: false,
      };

      const initialState: UI = {
        text: "",
        alertDone: false,
        alertWrong: false,
        loading: false,
      };

      const action = openAlertWrongActionCreator("Testing");

      const recivedValue = uiReducer(initialState, action);
      expect(recivedValue).toEqual(expectState);
    });
  });

  describe("When it's invoked closeAlertWrongActionCreator", () => {
    test("Then it should change state alertWrong true to false and modify text state", () => {
      const expectState: UI = {
        text: "",
        alertDone: false,
        alertWrong: false,
        loading: false,
      };

      const initialState: UI = {
        text: "Testing",
        alertDone: false,
        alertWrong: true,
        loading: false,
      };

      const action = closeAlertWrongActionCreator();

      const recivedValue = uiReducer(initialState, action);
      expect(recivedValue).toEqual(expectState);
    });
  });
});
