import axios from "axios";
import { groupOfBeer, singleBeer } from "../../mocks/beerMocks";
import { deleteBeerThunk, loadBeersThunk } from "./beerThunks";

jest.useFakeTimers();

describe("Given a loadBeersThunk function", () => {
  describe("When it's invoked and do right", () => {
    test("Then it should call dispatch", async () => {
      axios.get = jest.fn().mockResolvedValue({ data: { groupOfBeer } });
      const dispatch = jest.fn();
      const thunk = loadBeersThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked and do wrong", () => {
    test("Then it should call dispatch 4 times", async () => {
      axios.get = jest.fn().mockRejectedValue(new Error());
      const dispatch = jest.fn();
      const thunk = loadBeersThunk();
      const expectCalls = 4;

      await thunk(dispatch);

      jest.runOnlyPendingTimers();

      expect(dispatch).toHaveBeenCalledTimes(expectCalls);
    });
  });
});

describe("Given a deleteBeerThunk function", () => {
  describe("When it's invoked and do right", () => {
    test("Then it should call dispatch 4 times", async () => {
      const message = "Se ha eliminado la cerveza";
      axios.delete = jest.fn().mockResolvedValue({ data: { message } });
      const dispatch = jest.fn();
      const thunk = deleteBeerThunk(singleBeer.id);
      jest.runOnlyPendingTimers();
      const expectCalls = 4;

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(expectCalls);
    });
  });

  describe("When it's invoked and do wrong", () => {
    test("Then it should call dispatch 4 times", async () => {
      axios.delete = jest.fn().mockRejectedValue(new Error());
      const dispatch = jest.fn();
      const thunk = deleteBeerThunk(singleBeer.id);
      const expectCalls = 4;

      await thunk(dispatch);

      jest.runOnlyPendingTimers();

      expect(dispatch).toHaveBeenCalledTimes(expectCalls);
    });
  });
});
