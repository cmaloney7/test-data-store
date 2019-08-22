# Test Data Store
An API interface for customers who need to consume test data.

### Running Stand Alone
To start this api up and start using it, do the following. Note, this is for API use only and not development.

1. Prerequisite: Install Docker
        
2. Clone the repo

        $ git clone https://github.com/cmaloney7/test-data-store.git

3. Change directory to the folder 'test-data-store'

        $ cd test-data-store
        
4. Run the following command to start up api and dependant stack (node, mongo, etc.)

        $ bash docker.start.sh
        
5. Access the API and Swagger page via the section below 'Using the API Server' or use the Postman collection.

When you are done using the development containers, stop them by running the following bash script.

        $ bash docker.stop.sh

### Developer Setup
To start this api up and continue development, do the following.

1. Prerequisite: Install Docker Desktop on your local machine
        
        Mac - https://docs.docker.com/docker-for-mac/install/
        Windows - https://docs.docker.com/docker-for-windows/install/
        
2. Clone the repo

        $ git clone https://github.com/cmaloney7/test-data-store.git

3. Change directory to the folder 'test-data-store'

        $ cd test-data-store
        
4. Run the following command to start up api and dependant stack (node, mongo, etc.)

        $ bash docker.start.dev.sh
        
5. Open the repo in your preferred IDE for further development, git management, testing, etc.

When you are done using the development containers, stop them by running the following bash script.

        $ bash docker.stop.dev.sh

        
### Using the API Server
The server runs on http://localhost:12700

Swagger URL http://localhost:12700/api-docs

Mongo Express http://localhost:8081 (Note, mongo-express should only be used privately for development purposes.  That being said, it is only available when using Developer Setup)

### Postman Collection
Import the following into postman for use and/or testing: `./postman/node-api-boiler.postman_collection.json`
