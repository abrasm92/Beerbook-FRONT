export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface customError {
  response: { status: number; data: { message: string } };
}
