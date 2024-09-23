# Use the official Node.js image as the base image
FROM node:14 AS node

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Start the React app
CMD ["npm", "run", "start"]
# CMD ["node", "server/index.js"]

