# Step 1: Use an official Node.js runtime as the base image
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of your project files into the container
COPY . .

# Step 6: Build the React application for production
RUN npm run build

# Step 7: Expose the port (for Railway or any other platform)
EXPOSE 3000

# Step 8: Run the app
CMD ["npm", "start"]
