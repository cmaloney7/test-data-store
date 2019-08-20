# Test Data Store
An API interface for customers who need to consume test data.

### Developer Setup
1. Install NodeJS
2. Clone the repo
3. Change directory to the folder 'test-data-store'
4. Run `$npm install`
5. Setup Mongo (see below)

### Mongo Database Setup
You'll have to setup your own Mongo database for this to work.
Once you do, point to your mongo db URI and creds using the following config file: `./config/app.js`

This is currently setup to connect to a mongo docker container.  This mongo container will spin up using the docker compose command below.

### Starting the API Server
To start the server, run the following command

    $npm run server

The server runs on http://localhost:12700

### Mongo Reference
https://www.w3schools.com/nodejs/nodejs_mongodb.asp

### Postman Collection
Import the following into postman for testing: `./postman/node-api-boiler.postman_collection.json`

### Docker
If you wish to just execute this application and use it, do the following:
1. Install docker
2. Clone the repo
3. Change directory to the folder 'test-data-store'
4. Run the following commands
These commands should be used for creating a current container of this application and starting it and it's entire stack dependencies.
 
To build a current container of this application
        
    $ docker build -t test-data-store:latest .
       
Once the above container is built, compose the entire application stack (mongo, node, test-data-store api)

    $ docker-compose up

Shut down application and dependant stack

    $ docker-compose down
