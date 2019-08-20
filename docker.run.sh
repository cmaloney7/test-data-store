#!/bin/bash

# tear down any existing containers
docker-compose down

# build new app container
docker build -t test-data-store:latest .

# start up container stack
docker-compose up
