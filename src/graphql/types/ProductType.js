const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat, GraphQLList} = require("graphql");
const productImageType = require("./ProductImageType");

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./myDatabase.db');

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
        model_number: { type: GraphQLString },
        images: {
            type: new GraphQLList(productImageType), resolve: (source, args, context, info) => {
                return new Promise((resolve, reject) => {
                    db.all('SELECT * FROM PRODUCT_IMAGES WHERE product_id = ?', [source.product_id], (err, rows) => {
                        if (err) {
                            // console.error(err);
                            reject([]);
                        }
                        resolve(rows);
                    });
                });
            }
        } 
    }
});

module.exports = productType;
