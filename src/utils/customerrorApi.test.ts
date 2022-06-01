import { customError } from "../types/interfaces";
import { customErrorApi } from "./customerrorApi";

describe("Given a customErrorApi function", () => {
  describe("When it's invoked with response status 400 and message 'Invalid username'", () => {
    test("Then it should return 'Invalid username'", () => {
      const error: customError = {
        response: {
          status: 400,
          data: { message: "Invalid username" },
        },
      };
      const expectedMessage = "Invalid username";

      const message = customErrorApi(error);

      expect(message).toEqual(expectedMessage);
    });
  });

  describe("When it's invoked with response status 409 and message 'Invalid email'", () => {
    test("Then it should return 'Invalid username'", () => {
      const error: customError = {
        response: {
          status: 409,
          data: { message: "Invalid email" },
        },
      };
      const expectedMessage = "Invalid email";

      const message = customErrorApi(error);

      expect(message).toEqual(expectedMessage);
    });
  });

  describe("When it's invoked with response status 500 and message 'Server error'", () => {
    test("Then it should return 'Invalid username'", () => {
      const error: customError = {
        response: {
          status: 500,
          data: { message: "Server error" },
        },
      };
      const expectedMessage = "Server error";

      const message = customErrorApi(error);

      expect(message).toEqual(expectedMessage);
    });
  });

  describe("When it's invoked with response status not covered in function ex:300 and message ''", () => {
    test("Then it should return 'Invalid username'", () => {
      const error: customError = {
        response: {
          status: 300,
          data: { message: "" },
        },
      };
      const expectedMessage = "";

      const message = customErrorApi(error);

      expect(message).toEqual(expectedMessage);
    });
  });
});
