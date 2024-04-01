#!/bin/bash

#  build app
npm run build

# Docker login
docker login

# Build Docker image
 docker build -t vite-react-app:latest .

# Run Docker container 
# docker run -p 8080:8080 vite-react-app:latest

# Tag Docker image
docker tag vite-react-app:latest ramona12/containerizing_a_web_container:latest

# Push Docker image to Docker Hub
 docker push ramona12/containerizing_a_web_container:latest

# Pull Docker image from Docker Hub
docker pull ramona12/containerizing_a_web_container:latest

# Run Docker container with pulled image
docker run -p 8080:8080 ramona12/containerizing_a_web_container:latest
# By Ramona Ingabire