import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { todo } from "../db/todo.gql";
import { GraphQLDate } from "graphql-iso-date";
import { DB_client } from "../db/client.db";
export const mutation = new GraphQLObjectType({
  name: "mutations",
  description: "",
  fields: () => ({
    addTodo: {
      type: todo,
      args: {
        message: {
          type: GraphQLString,
        },
        completeOn: {
          type: GraphQLDate,
        },
      },
      resolve: async (_, args) => {
        return await DB_client.todos.create({
          data: {
            completeOn: args.completeOn,
            message: args.message,
          },
        });
      },
    },

    updateTodo: {
      type: todo,
      args: {
        id: {
          type: GraphQLID,
        },
        message: {
          type: GraphQLString,
        },
        completeOn: {
          type: GraphQLDate,
        },
      },
      resolve: async (_, args) => {
        return await DB_client.todos.update({
          where: { id: args.id },
          data: {
            completeOn: args.completeOn,
            message: args.message,
          },
        });
      },
    },

    deleteTodo: {
      type: todo,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: async (_, args) => {
        return await DB_client.todos.delete({
          where: {
            id: args.id,
          },
        });
      },
    },
  }),
});
