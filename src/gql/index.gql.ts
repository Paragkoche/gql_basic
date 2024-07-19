import { GraphQLSchema } from "graphql";
import { query } from "./query";
import { mutation } from "./mutation.gql";

export const schema = new GraphQLSchema({
  query: query,
  mutation: mutation,
});
