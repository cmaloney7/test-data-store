var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    var mongoCollection = 'bookings';
    /**
     * @swagger
     *
     * definitions:
     *   NewUser:
     *     type: object
     *     required:
     *       - username
     *       - password
     *     properties:
     *       username:
     *         type: string
     *       password:
     *         type: string
     *         format: password
     *   User:
     *     allOf:
     *       - $ref: '#/definitions/NewUser'
     *       - required:
     *         - id
     *       - properties:
     *         id:
     *           type: integer
     *           format: int64
     */

    // GET
    /**
     * @swagger
     * /bookings:
     *   get:
     *     tag:
     *       -booking
     *     description: Returns booking data
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: OK
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#/definitions/User'
     */
    app.get('/bookings', (req, res) => {
        const data = {
            polarRegion: req.body.polarRegion,
            brand: req.body.brand,
            env: req.body.env,
            reservedBy: req.body.reservedBy    //optional
        };

        // set reservedBy to null if not passed in JSON request. This will prevent reserved data from being returned.
        if (data.reservedBy === 'undefined') data.reservedBy = null;

        // set mongo query
        var query = {polarRegion: data.polarRegion, brand: data.brand, env: data.env, reservedBy: data.reservedBy};

        // query mongo collections
        db.collection(mongoCollection).find(query).toArray(function(err, result) {
            if (err) {
                console.log('Mongo Query:');
                console.log(query);
                res.send({'error':'An error has occurred'});
                console.log('GET ERROR: ' + err);
            } else {
                res.send(result);
                console.log('GET Booking Collection(s): ' + result.length);
            }
        });
    });

    // POST
    app.post('/booking', (req, res) => {
        const data = {
            reservedBy: req.body.reservedBy,
            bookingNumber: req.body.bookingNumber,
            lastName: req.body.lastName,
            polarRegion: req.body.polarRegion,
            brand: req.body.brand,
            env: req.body.env,
            departureDate: req.body.departureDate,
            email: req.body.email,
            password: req.body.password,
            marinerId: req.body.marinerId,
            occupancy: req.body.occupancy,
            loyalty: req.body.loyalty,
            currency: req.body.currency
        };
        data.creationDate = new Date().toISOString();
        data.departureDate = new Date(data.departureDate).toISOString();

        // insert record object in mongo collection
        db.collection(mongoCollection).insertOne(data, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
                console.log('POST ERROR: ' + err);
            } else {
                res.send(result.ops[0]);
                console.log('POST Data: ' + result.ops[0]._id);
            }
        });
    });

    //PUT - booking
    app.put('/booking/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const data = {
            reservedBy: req.body.reservedBy,
            bookingNumber: req.body.bookingNumber,
            lastName: req.body.lastName,
            polarRegion: req.body.polarRegion,
            brand: req.body.brand,
            env: req.body.env,
            departureDate: req.body.departureDate,
            email: req.body.email,
            password: req.body.password,
            marinerId: req.body.marinerId,
            occupancy: req.body.occupancy,
            loyalty: req.body.loyalty,
            currency: req.body.currency
        };
        data.modifiedDate = new Date().toISOString();
        db.collection(mongoCollection).updateOne(details, data, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
                console.log('PUT ERROR: ' + err);
            } else {
                res.send(data);
                console.log('PUT Booking: ' + id);
            }
        });
    });

    // DELETE booking
    app.delete('/booking/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        db.collection(mongoCollection).deleteOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
                console.log('DELETE ERROR: ' + err);
            } else {
                res.send('DELETED Data: ' + id);
                console.log('DELETED Data: ' + id);
            }
        });
    });

};