const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat} = require("graphql");

const productImageType = new GraphQLObjectType({
    name: 'ProductImage',
    fields: {
        image_id: { type: GraphQLInt },
        product_id: { type: GraphQLInt },
        url: { type: GraphQLString },
        is_main: { type: GraphQLInt }
    }
});

module.exports = productImageType;
