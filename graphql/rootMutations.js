const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

const db = require("../models");
const { UsersTypes } = require("./types/userTypes");

const RootMutation = new GraphQLObjectType({
  name: "usersMutation",
  fields: {
    addNewUsers: {
      type: UsersTypes,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parents, args) {
        const { name, password } = args;
        // do your checks and hashing here
        return db.users.create({
          name,
          password,
        });
      },
    },
  },
});

module.exports = RootMutation;
