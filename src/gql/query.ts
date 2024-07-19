import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
import { todo } from "../db/todo.gql";
import { DB_client } from "../db/client.db";

export const query = new GraphQLObjectType({
  name: "ROOT",
  description: "",
  fields: () => ({
    getTodo: {
      type: GraphQLList(todo),
      resolve: async () => {
        return await DB_client.todos.findMany();
      },
    },
    getTodoById: {
      type: todo,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: async (_, args) => {
        return await DB_client.todos.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    },
  }),
});
