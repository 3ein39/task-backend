const {GraphQLObjectType, GraphQLInt, GraphQLList} = require("graphql");
const productType = require("../types/ProductType");
const productImageType = require("../types/ProductImageType");
const productRatingType = require("../types/ProductRatingType");
const userType = require("../types/UserType");
const categoryType = require("../types/CategoryType");


const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./myDatabase.db');

const queryType = new GraphQLObjectType({
    name: 'Query', fields: {
        productGetByID: {
            type: productType, args: {
                product_id: {type: GraphQLInt}
            }, resolve: (source, args, context, info) => {
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
        }, productGetAll: {
            type: new GraphQLList(productType), resolve: (source, args, context, info) => {
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
        }, productGetImagesByID: {
            type: new GraphQLList(productImageType), args: {
                product_id: {type: GraphQLInt}
            }, resolve: (source, args, context, info) => {
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
        }, productGetRatingsByID: {
            type: new GraphQLList(productRatingType), args: {
                product_id: {type: GraphQLInt}
            }, resolve: (source, args, context, info) => {
                return new Promise((resolve, reject) => {
                    db.all('SELECT PRODUCT_RATINGS.*, USER.username FROM PRODUCT_RATINGS INNER JOIN USER ON PRODUCT_RATINGS.user_id = USER.user_id WHERE product_id = ?', [args.product_id], (err, rows) => {
                        if (err) {
                            // console.error(err);
                            reject([]);
                        }
                        resolve(rows);
                    });
                });
            }
        },
        productGetAllWithImages: {
            type: new GraphQLList(productType), resolve: (source, args, context, info) => {
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
        productAverageRating: {
            type: GraphQLInt, args: {
                product_id: {type: GraphQLInt}
            }, resolve: (source, args, context, info) => {
                return new Promise((resolve, reject) => {
                    db.get('SELECT AVG(rating) as average FROM PRODUCT_RATINGS WHERE product_id = ?', [args.product_id], (err, row) => {
                        if (err) {
                            // console.error(err);
                            reject(null);
                        }
                        resolve(row.average);
                    });
                });
            }
        },
        userGetByID: {
            type: userType, args: {
                user_id: {type: GraphQLInt}
            }, resolve: (source, args, context, info) => {
                return new Promise((resolve, reject) => {
                    db.get('SELECT * FROM USER WHERE user_id = ?', [args.user_id], (err, row) => {
                        if (err) {
                            // console.error(err);
                            reject(null);
                        }
                        resolve(row);
                    });
                });
            }
        },
        categoryGetAll: {
            type: new GraphQLList(categoryType), resolve: (source, args, context, info) => {
                return new Promise((resolve, reject) => {
                    db.all('SELECT * FROM CATEGORIES', (err, rows) => {
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
