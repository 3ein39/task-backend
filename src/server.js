const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();
const port = 3000;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));



app.listen(port, () => {
    console.log(`Server is running on port ${port}/graphql`);
});
