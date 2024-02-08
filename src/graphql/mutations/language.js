const { GraphQLObjectType, GraphQLString } = require("graphql");
const i18next = require("i18next");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    setLanguage: {
      type: GraphQLString,
      args: {
        language: { type: GraphQLString },
      },
      resolve: (source, args, context, info) => {
        i18next.changeLanguage(args.language);
        return `Language set to ${args.language}`;
      },
    },
  },
});

module.exports = mutationType;
