import { BasicUser, LoginUser, User, UserData } from "../types/interfaces";

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

export const userLogged: BasicUser = {
  id: "1234",
  name: "admin",
};

export const userData: UserData = {
  name: "admin",
  username: "admin",
  email: "admin@admin.com",
  image: "",
  imageBackup: "",
  creations: 10,
  favorites: 23,
  age: 29,
  country: "españa",
  admin: true,
};
