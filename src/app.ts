import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./gql/index.gql";

const app = express();

app.use(
  "/",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

export default app;
