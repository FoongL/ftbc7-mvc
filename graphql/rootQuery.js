const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const db = require("../models");

const { UsersTypes } = require("./types/userTypes");

const RootQuery = new GraphQLObjectType({
  name: "inClassSampleQuery",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UsersTypes),
      resolve(parent, args) {
        return db.users.findAll({});
      },
    },
    findUserById: {
      type: UsersTypes,
      args: {
        userId: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return db.users.findByPk(args.userId);
      },
    },
  },
});

module.exports = RootQuery;
