import { CustomError } from "../types/interfaces";

export const customErrorApi = (error: CustomError): string => {
  if (error.response) {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          return error.response.data.message;
        case 409:
          return error.response.data.message;
        case 500:
          return error.response.data.message;
        case 401:
          return error.response.data.message;
        default:
          return "";
      }
    }
    return "";
  }
  return "";
};
