import axios from "axios";
import { groupOfBeer } from "../../mocks/beerMocks";
import { loadBeersActionCreator } from "../features/beerSlice";
import loadBeersThunk from "./beerThunks";

describe("Given a loadBeersThunk function", () => {
  describe("When it's invoked and do right", () => {
    test("Then it should call dispatch with a loadbeersActionCreator", async () => {
      axios.get = jest.fn().mockResolvedValue({ data: groupOfBeer });
      const dispatch = jest.fn();
      const thunk = loadBeersThunk();
      const action = loadBeersActionCreator(groupOfBeer);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's invoked and do wrong", () => {
    test("Then it should return and error", async () => {
      axios.get = jest.fn().mockRejectedValue(new Error());
      const dispatch = jest.fn();
      const thunk = loadBeersThunk();
      const expectError = new Error();

      const response = await thunk(dispatch);

      expect(response).toEqual(expectError);
    });
  });
});
