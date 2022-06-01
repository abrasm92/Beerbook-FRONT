import { LoginUser, User } from "../types/interfaces";

export const singleUser: User = {
  name: "admin",
  username: "admin",
  email: "admin@admin.com",
  password: "beerbook",
};

export const loginUser: LoginUser = {
  username: "admin",
  password: "beerbook",
};
