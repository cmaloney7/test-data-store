# Test Data Store
An API interface for customers who need to consume test data.

### Setup
1. Install NodeJS
2. Clone the repo
3. Change directory to the folder 'test-data-store'
4. Run `$npm install`

### Starting the API Server
To start the server, run the following command

    $npm run server

The server runs on http://localhost:12700

### Mongo Database Setup
This boilerplate uses mLab. A 3rd party Mongo host was used to setup and host the database. It's located at the
`website:` https://mlab.com/
        
Point to your mongo db URI and creds using the following config file: `./config/db.js`

### Mongo Reference
https://www.w3schools.com/nodejs/nodejs_mongodb.asp

### Postman Tests
Import the following into postman for testing: `./postman/node-api-boiler.postman_collection.json`