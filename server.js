const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app = express();
const hostname = '127.0.0.1';
const port = 12700;

app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    // Make sure you add the mongo database name and not the collection name
    var db = database.db("testdatastore");
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});