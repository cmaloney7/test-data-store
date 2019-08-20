module.exports = {
    // To connect using a driver via the standard MongoDB URI
    // Example: mongodb://<dbuser>:<dbpassword>@ds121343.mlab.com:21343/<dbname>
    // mongoUrl : 'mongodb://localhost:27017/config',
    // mongoUrl : 'mongodb://root:example@mongo:27017/testdatastore',
    // mongoUrl : 'mongodb://localhost:32780/testdatastore',   // local dev only using docker, Mongo container
    mongoUrl : 'mongodb://mongo:27017/testdatastore',    // use for regular use
    mongoDb: 'testdatastore',
    hostname: '127.0.0.1',
    port: 12700
};