const { GraphQLSchema } = require("graphql");
const RootQuery = require("./rootQuery");
const RootMutation = require('./rootMutations')

const Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

module.exports = Schema;
