export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginUser {
  username: string;
  password: string;
}

export interface useData {
  name: string;
  username: string;
  email: string;
  image: string | null;
  creations: number;
  favorites: number;
  age: number;
  country: string;
  admin: boolean;
}
export interface UserState {
  name: string;
  id: string;
  logged: boolean;
  data: useData;
}

export interface BasicUser {
  name: string;
  id: string;
}

export interface CustomError {
  response: { status: number; data: { message: string } };
}

export interface UserResponseApi {
  iat: number;
  id: string;
  username: string;
}

export interface BeerDataApi {
  name: string;
  brewery: string;
  style: string;
  degrees: number;
  IBU: number | null;
  country: string;
  description: string | null;
  image: string | null;
  owner: string | null;
  id: string;
}

export interface BeerState {
  listOfBeers: BeerDataApi[];
  page: number;
  singleBeer: BeerDataApi;
}

export interface UI {
  text: string;
  alertDone: Boolean;
  alertWrong: Boolean;
  loading: Boolean;
}
