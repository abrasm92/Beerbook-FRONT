import { CustomError } from "../types/interfaces";

export const customErrorApi = (error: CustomError): string => {
  const {
    response: {
      status,
      data: { message },
    },
  }: CustomError = error;
  if (status === 400) {
    return message;
  }
  if (status === 409) {
    return message;
  }
  if (status === 500) {
    return message;
  }
  if (status === 401) {
    return message;
  }
  return "";
};
