var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    var mongoCollection = 'customers';

    // GET
    app.get('/customers', (req, res) => {
        const data = {
            brand: req.body.brand,
            env: req.body.env,
            reservedBy: req.body.reservedBy    //optional
        };

        // set reservedBy to null if not passed in JSON request. This will prevent reserved data from being returned.
        if (data.reservedBy === 'undefined') data.reservedBy = null;

        // set mongo query
        var query = {brand: data.brand, env: data.env, reservedBy: data.reservedBy};

        // query mongo collections
        db.collection(mongoCollection).find(query).toArray(function(err, result) {
            if (err) {
                console.log('Mongo Query:');
                console.log(query);
                res.send({'error':'An error has occurred'});
                console.log('GET ERROR: ' + err);
            } else {
                res.send(result);
                console.log('GET Customer Collection(s): ' + result.length);
            }
        });
    });

    // POST
    app.post('/customer', (req, res) => {
        const data = {
            reservedBy: req.body.reservedBy,
            brand: req.body.brand,
            env: req.body.env,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            middleName: req.body.middleName,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            zipCode: req.body.zipCode,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            marinerId: req.body.marinerId,
            loyalty: req.body.loyalty,
            birthDate: req.body.birthDate
        };
        data.creationDate = new Date().toISOString();
        data.birthDate = new Date(data.birthDate).toISOString();

        // insert record object in mongo collection
        db.collection(mongoCollection).insertOne(data, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
                console.log('POST ERROR: ' + err);
            } else {
                res.send(result.ops[0]);
                console.log('POST Customer Data Collection: ' + result.ops[0]._id);
            }
        });
    });

    //PUT - booking
    app.put('/customer/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const data = {
            reservedBy: req.body.reservedBy,
            brand: req.body.brand,
            env: req.body.env,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            middleName: req.body.middleName,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            zipCode: req.body.zipCode,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            marinerId: req.body.marinerId,
            loyalty: req.body.loyalty,
            birthDate: req.body.birthDate
        };
        data.modifiedDate = new Date().toISOString();
        db.collection(mongoCollection).updateOne(details, data, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
                console.log('PUT ERROR: ' + err);
            } else {
                res.send(data);
                console.log('PUT Customer Data Collection: ' + id);
            }
        });
    });

    // DELETE booking
    app.delete('/customer/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        db.collection(mongoCollection).deleteOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
                console.log('DELETE ERROR: ' + err);
            } else {
                res.send('DELETED Data: ' + id);
                console.log('DELETED Customer Data Collection: ' + id);
            }
        });
    });

};
