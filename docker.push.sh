#!/bin/bash

# build latest app container
docker build -t test-data-store:latest .

# login to docker hub
echo logging into to docker hub...
docker login --username caselletuckelle

# tag container
docker tag test-data-store:latest caselletuckelle/test-data-store:latest

# push new app container to docker repo (https://hub.docker.com/r/caselletuckelle/test-data-store)
docker push caselletuckelle/test-data-store:latest