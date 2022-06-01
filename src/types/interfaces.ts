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

export interface UserState {
  name: string;
  id: string;
  logged: boolean;
}

export interface BasicUser {
  name: string;
  id: string;
}

export interface CustomError {
  response: { status: number; data: { message: string } };
}
