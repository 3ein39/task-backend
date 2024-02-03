const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const { GraphQLInt, GraphQLFloat } = require('graphql');
const sqlite3 = require('sqlite3').verbose();

const productType = require('./types/ProductType');
const queryType = require('./queries/QueryType');

let db = new sqlite3.Database('./myDatabase.db');


const schema = new GraphQLSchema({
    query: queryType
});

module.exports = schema;