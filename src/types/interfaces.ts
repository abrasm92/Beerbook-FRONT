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

export interface UserData {
  name: string;
  username: string;
  email: string;
  image: string | null;
  imageBackup: string | null;
  creations: number;
  favorites: number;
  age: number | null;
  country: string | null;
  admin: boolean;
}
export interface UserState {
  name: string;
  id: string;
  logged: boolean;
  data: UserData;
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
  IBU: number;
  country: string;
  description: string;
  image: string;
  imageBackup: string;
  owner: string;
  id: string;
}

export interface BeerState {
  listOfBeers: BeerDataApi[];
  page: number;
  totalPages: number;
  filter: boolean;
  favoritesList: boolean;
  creationsList: boolean;
  generalList: boolean;
  singleBeer: BeerDataApi;
}

export interface UI {
  text: string;
  alertDone: boolean;
  alertWrong: boolean;
  loading: boolean;
}

export interface BeerData {
  name: string;
  brewery: string;
  style: string;
  degrees: number;
  IBU: number;
  country: string;
  description: string;
  image: string;
}
