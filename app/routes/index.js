const dataRoutesBookings = require('./data_routes_bookings');
const dataRoutesCustomers = require('./data_routes_customers');

module.exports = function(app, db) {
    dataRoutesBookings(app, db);
    dataRoutesCustomers(app, db);

    // Other route groups could go here, in the future
};