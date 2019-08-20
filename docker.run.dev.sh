#!/bin/bash

# tear down any existing containers
docker-compose down

# build development app container
docker build -t test-data-store:dev .

# start up container stack
docker-compose -f docker-compose-dev.yml up