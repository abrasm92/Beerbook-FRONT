import { rest } from "msw";

const mockToken = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOiI2Mjk1MjFhY2E4N2ZjOWJiNjRhOGJkOGEiLCJpYXQiOjE2NTQwNzkxNzN9.aRTveqFSu7BPKYcIzo8ur1342WgueYuevin6fGt8LpY",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json("Usuario creado"));
    }
  ),
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockToken));
  }),
];
