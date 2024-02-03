const {GraphQLObjectType, GraphQLInt, GraphQLList} = require("graphql");
const productType = require("../types/ProductType");
const productImageType = require("../types/ProductImageType");
const productRatingType = require("../types/ProductRatingType");


const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./myDatabase.db');

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
        },
        productGetImagesByID: {
            type: new GraphQLList(productImageType),
            args: {
                product_id: { type: GraphQLInt }
            },
            resolve: (source, args, context, info) => {
                return new Promise((resolve, reject) => {
                    db.all('SELECT * FROM PRODUCT_IMAGES WHERE product_id = ?', [args.product_id], (err, rows) => {
                        if (err) {
                            // console.error(err);
                            reject([]);
                        }
                        resolve(rows);
                    });
                });
            }
        },
        productGetRatingsByID: {
            type: new GraphQLList(productRatingType),
            args: {
                product_id: { type: GraphQLInt }
            },
            resolve: (source, args, context, info) => {
                return new Promise((resolve, reject) => {
                    db.all('SELECT * FROM PRODUCT_RATINGS WHERE product_id = ?', [args.product_id], (err, rows) => {
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

module.exports = queryType;
