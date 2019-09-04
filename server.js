const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const config         = require('./config/app');
const swaggerUi      = require('swagger-ui-express');
const swaggerJson    = require('./swagger/swagger.json');

const app = express();
const hostname = config.hostname;
const port = config.port;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

MongoClient.connect(config.mongoUrl, (err, database) => {
    if (err) return console.log(err);

    // Make sure you add the mongo database name and not the collection name
    var db = database.db(config.mongoDb);
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});
