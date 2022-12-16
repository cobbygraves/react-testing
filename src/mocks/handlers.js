import { rest } from "msw";

export const handlers = [
  rest.post("https://jsonplaceholder.typicode.com/user", (req, res, ctx) => {
    res(
      ctx.status(200),
      ctx.json([{
        username: "cobbygraves",
        password: "rmeodesaint",
      }])
    );
  }),
];
