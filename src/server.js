const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const cors = require('cors')

const app = express();
const port = 4000;

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));



app.listen(port, () => {
    console.log(`Server is running on port ${port}/graphql`);
});
