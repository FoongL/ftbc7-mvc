const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const db = require("../models");

const { UsersTypes } = require("./types/userTypes");

const userQueries = require("./query/userQuery");

const RootQuery = new GraphQLObjectType({
  name: "inClassSampleQuery",
  fields: {
    ...userQueries,
  },
});

module.exports = RootQuery;
