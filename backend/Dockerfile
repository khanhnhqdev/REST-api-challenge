# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the Nest.js application
EXPOSE 3001

# Start the Nest.js application
CMD ["npm", "run", "start"]
