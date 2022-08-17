const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
  } = require("graphql");

const UsersTypes = new GraphQLObjectType({
  name: "users",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    // password: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

module.exports = { UsersTypes };
