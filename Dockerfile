# Base image: Use Node.js 22 slim for compatibility with project
FROM node:22-slim

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Install a lightweight server to serve the built app
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Command to serve the built app
CMD ["serve", "-s", "build", "-l", "3000"]