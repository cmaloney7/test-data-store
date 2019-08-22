# Test Data Store
An API interface for customers who need to consume test data.

### Setup
1. Install Docker

        https://docs.docker.com/install/
        
2. Clone the repo

        $ git clone https://github.com/cmaloney7/test-data-store.git

3. Change directory to the folder 'test-data-store'

        $ cd test-data-store
        
### Running Stand Alone
To start this api up and start using it, do the following. Note, this is for API use only and not development.

1. Run the following command to start up api and dependant stack (node, mongo and test-data-store API)

        $ bash docker.start.sh
        
2. The test-data-store API should now be running.  Access the API and Swagger page via the section below 'Using the API 
Server' or use the Postman collection.

#### Stopping the test-data-store
When you are done using the api, stop the container by running the following bash script.

        $ bash docker.stop.sh

### Developer Setup
To start this api up and continue development, do the following.
        
1. Run the following command to start up api and dependant stack (node, mongo, mongo-express and test-data-store API)

        $ bash docker.start.dev.sh
        
2. The test-data-store API should now be running.  Open the repo in your preferred IDE for further development, git management, testing, etc.

#### Stopping the development version of the test-data-store
When you are done using the development containers, stop them by running the following bash script.

        $ bash docker.stop.dev.sh

### Push to Docker Repo
When you are finished with new development, you may want to update the production image to the public Docker repo.  
To create a new image and publish, run the following bash script.  

_Note, you'll need to know the password for the Docker repo to complete this.  
Also, this process can be automated in your CI/CD pipeline._

        $ bash docker.push.sh
     
### Using the API Server
The server runs on _http://localhost:12700_

Swagger URL _http://localhost:12700/api-docs_

Mongo Express _http://localhost:8081_ _(Note, mongo-express should only be used privately for development purposes.  That being said, it is only available when using Developer Setup)_

### Postman Collection
Import the following into postman for use and/or testing: `./postman/node-api-boiler.postman_collection.json`
