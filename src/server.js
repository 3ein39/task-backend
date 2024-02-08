const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const cors = require('cors')
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');

const app = express();
const port = 4000;

app.use(cors())

i18next
    .use(Backend)
    .init({
        lng: 'ar',
        fallbackLng: 'ar',
        debug: true,
        backend: {
            loadPath: 'src/locales/{{lng}}/translation.json'
        }
    });

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));



app.listen(port, () => {
    console.log(`Server is running on port ${port}/graphql`);
});
