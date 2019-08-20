# Use an official Python runtime as a parent image
FROM node:8-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN npm install

# Make port 12700 available to the world outside this container
EXPOSE 12700

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["npm", "run", "server"]