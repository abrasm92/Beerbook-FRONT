import { customError } from "../types/interfaces";

export const customErrorApi = ({
  response: {
    status,
    data: { message },
  },
}: customError): string => {
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
