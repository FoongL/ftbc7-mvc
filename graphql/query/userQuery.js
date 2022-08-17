const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const { UsersTypes } = require("../types/userTypes");

const getAllUsers = {
  getAllUsers: {
    type: new GraphQLList(UsersTypes),
    resolve(parent, args) {
      return db.users.findAll({});
    },
  },
};

const findUserById = {
  findUserById: {
    type: UsersTypes,
    args: {
      userId: { type: GraphQLInt },
    },
    resolve(parent, args) {
      return db.users.findByPk(args.userId);
    },
  },
};
module.exports = { getAllUsers, findUserById };
