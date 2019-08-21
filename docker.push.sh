#!/bin/bash


# build latest app container
docker build -t test-data-store:latest .

# login to docker hub
echo logging into to docker hub...
docker login --username caselletuckelle
#docker login --username=$DOCKER_USER --password=$DOCKER_PASS $DOCKER_HOST
#docker login --username caselletuckelle --password-stdin

# tag container
docker tag test-data-store:latest caselletuckelle/test-data-store:latest

# build new app container
docker push caselletuckelle/test-data-store:latest