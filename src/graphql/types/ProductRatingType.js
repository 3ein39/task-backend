const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat} = require("graphql");
const UsertType = require("./UserType");

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./myDatabase.db');

const productRatingType = new GraphQLObjectType({
    name: 'ProductRating',
    fields: {
        rating_id: { type: GraphQLInt },
        product_id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        rating: { type: GraphQLFloat },
        comment: { type: GraphQLString },
        timestamp: { type: GraphQLString },
        count: { type: GraphQLInt },
        user: {
            type: UsertType,
            resolve: (source, args, context, info) => {
                return new Promise((resolve, reject) => {
                    db.get('SELECT * FROM USER WHERE user_id = ?', [source.user_id], (err, row) => {
                        if (err) {
                            // console.error(err);
                            reject(null);
                        }
                        resolve(row);
                    });
                });
            }
        }
    }
});

module.exports = productRatingType;
