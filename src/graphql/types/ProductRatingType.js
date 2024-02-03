const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat} = require("graphql");

const productRatingType = new GraphQLObjectType({
    name: 'ProductRating',
    fields: {
        rating_id: { type: GraphQLInt },
        product_id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        rating: { type: GraphQLFloat },
        comment: { type: GraphQLString },
        timestamp: { type: GraphQLString }
    }
});

module.exports = productRatingType;
