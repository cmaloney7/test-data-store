# Test Data Store
An API interface for customers who need to consume test data.

### Developer Setup
1. Install docker
2. Clone the repo
3. Change directory to the folder 'test-data-store'
4. Run the following command to start up api and dependant stack (node, mongo, etc.)

        $ bash docker.run.dev.sh
5. Open the repo in your preferred IDE for further development

### Running Stand alone
1. Install docker
2. Clone the repo
3. Change directory to the folder 'test-data-store'
4. Run the following command to start up api and dependant stack (node, mongo, etc.)

        $ bash docker.run.sh
        
### Using the API Server
The server runs on http://localhost:12700

Swagger URL http://localhost:12700/api-docs

### Postman Collection
Import the following into postman for testing: `./postman/node-api-boiler.postman_collection.json`

