const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const { GraphQLInt, GraphQLFloat } = require('graphql');
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
        model_number: { type: GraphQLString }
    }
});



const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        productGetByID : {
            type: productType,
            args: {
                product_id: { type: GraphQLInt }
            },
            resolve: (source, args, context, info) => {
                return new Promise((resolve, reject) => {
                    db.get('SELECT * FROM PRODUCT WHERE product_id = ?', [args.product_id], (err, row) => {
                        if (err) {
                            // console.error(err);
                            reject(null);
                        }
                        resolve(row);
                    });
                });
            }
        },
        productGetAll: {
            type: new GraphQLList(productType),
            resolve: (source, args, context, info) => {
                return new Promise((resolve, reject) => {
                    db.all('SELECT * FROM PRODUCT', (err, rows) => {
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


const schema = new GraphQLSchema({
    query: queryType
});

module.exports = schema;