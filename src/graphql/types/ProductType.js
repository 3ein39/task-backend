const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat} = require("graphql");

const productType = new GraphQLObjectType({
    name: 'Product',
    fields: {
        product_id: { type: GraphQLInt },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        brand: { type: GraphQLString },
        price: { type: GraphQLFloat },
        discounted_price: { type: GraphQLFloat },
        vat: { type: GraphQLFloat },
        gained_points: { type: GraphQLInt },
        benefits: { type: GraphQLString },
        overview: { type: GraphQLString },
        gender: { type: GraphQLString },
        capacity: { type: GraphQLString },
        model_number: { type: GraphQLString }
    }
});

module.exports = productType;
