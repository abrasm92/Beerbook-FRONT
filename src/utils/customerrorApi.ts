import { CustomError } from "../types/interfaces";

export const customErrorApi = ({
  response: {
    status,
    data: { message },
  },
}: CustomError): string => {
  if (status === 400) {
    return message;
  }
  if (status === 409) {
    return message;
  }
  if (status === 500) {
    return message;
  }
  return "";
};
