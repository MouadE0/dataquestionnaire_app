# Use the official Node.js image as base
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .
RUN npm run build
# Expose port 3000 for the Express.js application
EXPOSE 8000
CMD [ "node", "dist/index.js" ]
