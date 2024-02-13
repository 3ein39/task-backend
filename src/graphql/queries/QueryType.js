const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} = require("graphql");
const productType = require("../types/ProductType");
const productImageType = require("../types/ProductImageType");
const productRatingType = require("../types/ProductRatingType");
const userType = require("../types/UserType");
const categoryType = require("../types/CategoryType");

const i18next = require("i18next");
const { t } = i18next;
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./myDatabase.db");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    sayHello: {
      type: GraphQLString,
      resolve: () => {
        return t("welcome");
      },
    },
    productGetByID: {
      type: productType,
      args: {
        product_id: { type: GraphQLInt },
        locale: { type: GraphQLString },
      },
      resolve: (source, args, context, info) => {
        return new Promise((resolve, reject) => {
          db.get(
            "SELECT * FROM PRODUCT WHERE product_id = ?",
            [args.product_id],
            (err, row) => {
              if (err) {
                reject(null);
              }

              i18next.changeLanguage(args.locale);
              if (args.locale === "ar") {
                row.title = i18next.t(`${args.product_id}.title`);
                row.description = i18next.t(`${args.product_id}.description`);
                row.benefits = i18next.t(`${args.product_id}.benefits`);
                row.overview = i18next.t(`${args.product_id}.overview`);
              }
              resolve(row);
            }
          );
        });
      },
    },
    productGetAll: {
      type: new GraphQLList(productType),
      args: { locale: { type: GraphQLString } },
      resolve: (source, args, context, info) => {
        return new Promise((resolve, reject) => {
          db.all("SELECT * FROM PRODUCT", (err, rows) => {
            if (err) {
              // console.error(err);
              reject([]);
            }

            if (args.locale === "ar") {
              rows.forEach((row) => {
                row.title = i18next.t(`${row.product_id}.title`);
                row.description = i18next.t(`${row.product_id}.description`);
                row.benefits = i18next.t(`${row.product_id}.benefits`);
                row.overview = i18next.t(`${row.product_id}.overview`);
              });
            }

            resolve(rows);
          });
        });
      },
    },
    productGetImagesByID: {
      type: new GraphQLList(productImageType),
      args: {
        product_id: { type: GraphQLInt },
      },
      resolve: (source, args, context, info) => {
        return new Promise((resolve, reject) => {
          db.all(
            "SELECT * FROM PRODUCT_IMAGES WHERE product_id = ?",
            [args.product_id],
            (err, rows) => {
              if (err) {
                // console.error(err);
                reject([]);
              }
              resolve(rows);
            }
          );
        });
      },
    },
    productGetRatingsByID: {
      type: new GraphQLList(productRatingType),
      args: {
        product_id: { type: GraphQLInt },
      },
      resolve: (source, args, context, info) => {
        return new Promise((resolve, reject) => {
          db.all(
            "SELECT PRODUCT_RATINGS.*, USER.username FROM PRODUCT_RATINGS INNER JOIN USER ON PRODUCT_RATINGS.user_id = USER.user_id WHERE product_id = ?",
            [args.product_id],
            (err, rows) => {
              if (err) {
                // console.error(err);
                reject([]);
              }
              resolve(rows);
            }
          );
        });
      },
    },
    productGetRatingsCountByID: {
      type: GraphQLInt,
      args: {
        product_id: { type: GraphQLInt },
      },
      resolve: (source, args, context, info) => {
        return new Promise((resolve, reject) => {
          db.get(
            "SELECT COUNT(*) as count FROM PRODUCT_RATINGS WHERE product_id = ?",
            [args.product_id],
            (err, row) => {
              if (err) {
                // console.error(err);
                reject(null);
              }
              resolve(row.count);
            }
          );
        });
      },
    },
    productGetAllWithImages: {
      type: new GraphQLList(productType),
      args: { locale: { type: GraphQLString } },
      resolve: (source, args, context, info) => {
        return new Promise((resolve, reject) => {
          db.all("SELECT * FROM PRODUCT", (err, rows) => {
            if (err) {
              // console.error(err);
              reject([]);
            }

            if (args.locale === "ar") {
              rows.forEach((row) => {
                row.title = i18next.t(`${row.product_id}.title`);
                row.description = i18next.t(`${row.product_id}.description`);
                row.benefits = i18next.t(`${row.product_id}.benefits`);
                row.overview = i18next.t(`${row.product_id}.overview`);
              });
            }

            resolve(rows);
          });
        });
      },
    },
    productAverageRating: {
      type: GraphQLInt,
      args: {
        product_id: { type: GraphQLInt },
      },
      resolve: (source, args, context, info) => {
        return new Promise((resolve, reject) => {
          db.get(
            "SELECT AVG(rating) as average FROM PRODUCT_RATINGS WHERE product_id = ?",
            [args.product_id],
            (err, row) => {
              if (err) {
                // console.error(err);
                reject(null);
              }
              resolve(row.average);
            }
          );
        });
      },
    },
    userGetByID: {
      type: userType,
      args: {
        user_id: { type: GraphQLInt },
      },
      resolve: (source, args, context, info) => {
        return new Promise((resolve, reject) => {
          db.get(
            "SELECT * FROM USER WHERE user_id = ?",
            [args.user_id],
            (err, row) => {
              if (err) {
                // console.error(err);
                reject(null);
              }
              resolve(row);
            }
          );
        });
      },
    },
    categoryGetAll: {
      type: new GraphQLList(categoryType),
      args: { locale: { type: GraphQLString } },
      resolve: (source, args, context, info) => {
        return new Promise((resolve, reject) => {
          db.all("SELECT * FROM CATEGORIES", (err, rows) => {
            if (err) {
              // console.error(err);
              reject([]);
            }

            if (args.locale === "ar") {
              console.log("inside row ar", rows);
              rows.forEach((row) => {
                row.title = i18next.t(`categories.${row.slug}.title`);
              });
                console.log("inside row ar", rows);
            }

            resolve(rows);
          });
        });
      },
    },
    // product get ratings group by rating
    productGetRatingsGroupByRating: {
      type: new GraphQLList(productRatingType),
      args: {
        product_id: { type: GraphQLInt },
      },
      resolve: (source, args, context, info) => {
        return new Promise((resolve, reject) => {
          db.all(
            "SELECT rating, COUNT(*) as count FROM PRODUCT_RATINGS WHERE product_id = ? GROUP BY rating",
            [args.product_id],
            (err, rows) => {
              if (err) {
                // console.error(err);
                reject([]);
              }
              // console.log("rows", rows);
              // for ratings from 1 to 5, if no rating exists, add it with count 0
              let ratings = [];
              for (let i = 1; i <= 5; i++) {
                let rating = rows.find((r) => r.rating === i);
                if (rating) {
                  ratings.push(rating);
                } else {
                  ratings.push({ rating: i, count: 0 });
                }
              }
              // console.log("ratings", ratings);
              resolve(ratings);
              // resolve(rows);
            }
          );
        });
      },
    },
  },
});

module.exports = queryType;
