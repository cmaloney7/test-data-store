# Test Data Store
An API interface for customers who need to consume test data.

### Running Stand Alone
To start this api up and start using it, do the following.

1. Install docker

        Mac - https://docs.docker.com/docker-for-mac/install/
        Windows - https://docs.docker.com/docker-for-windows/install/
        
2. Clone the repo

        $ git clone https://github.com/cmaloney7/test-data-store.git

3. Change directory to the folder 'test-data-store'

        $ cd test-data-store
        
4. Run the following command to start up api and dependant stack (node, mongo, etc.)

        $ bash docker.run.sh
        
5. Access the API via the section below 'Using the API Server'

### Developer Setup
To start this api up and continue development, do the following.
1. Install Docker Desktop on your local machine
    https://docs.docker.com/docker-for-windows/install/

2. Clone the repo

        $ git clone https://github.com/cmaloney7/test-data-store.git

3. Change directory to the folder 'test-data-store'

        $ cd test-data-store
        
4. Run the following command to start up api and dependant stack (node, mongo, etc.)

        $ bash docker.run.dev.sh
5. Open the repo in your preferred IDE for further development
        
### Using the API Server
The server runs on http://localhost:12700

Swagger URL http://localhost:12700/api-docs

Mongo Express http://localhost:8081

### Postman Collection
Import the following into postman for use and/or testing: `./postman/node-api-boiler.postman_collection.json`

### Shutdown
To stop the application and tear down the stack dependencies, run the following command

        $ docker-compose down
