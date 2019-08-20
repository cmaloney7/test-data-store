const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const config         = require('./config/app');
const swaggerUi      = require('swagger-ui-express');
const swaggerJsdoc   = require('swagger-jsdoc');
const swaggerDefinition = require('./swagger/definition.js');

const app = express();
const hostname = config.hostname;
const port = config.port;
const swaggerSpec = swaggerJsdoc(swaggerDefinition.options);

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

MongoClient.connect(config.mongoUrl, (err, database) => {
    if (err) return console.log(err);

    // Make sure you add the mongo database name and not the collection name
    var db = database.db(config.mongoDb);
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});
