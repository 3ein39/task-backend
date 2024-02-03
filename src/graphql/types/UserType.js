const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat} = require("graphql");

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        user_id: {type: GraphQLInt},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    }
});

module.exports = UserType;
