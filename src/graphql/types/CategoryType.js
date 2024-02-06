
const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat} = require("graphql");

const categoryType = new GraphQLObjectType({
    name: 'Category',
    fields: {
        category_id: { type: GraphQLInt },
        title: { type: GraphQLString },
        slug: { type: GraphQLString },
        parent_category_id: { type: GraphQLInt }
    }
});

module.exports = categoryType;
