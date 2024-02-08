const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const { GraphQLInt, GraphQLFloat } = require('graphql');
const sqlite3 = require('sqlite3').verbose();

const queryType = require('./queries/QueryType');
const mutationType = require('./mutations/language');


const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
});

module.exports = schema;