import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const todo = new GraphQLObjectType({
  name: "TODO",
  description: "",
  fields() {
    return {
      id: {
        type: GraphQLID,
      },
      message: {
        type: GraphQLString,
      },
      completeOn: {
        type: GraphQLString,
      },
      createAt: {
        type: GraphQLString,
      },
      updateAt: {
        type: GraphQLString,
      },
    };
  },
});
