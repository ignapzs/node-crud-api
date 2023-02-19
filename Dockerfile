FROM node:14

# Create app directory
WORKDIR /app

# Copying all the required files
COPY package*.json ./

# Installing dependencies
RUN npm install

# Bundle app source
COPY . .

# Exposing port
EXPOSE 3000

# Invoking main command
CMD [ "node", "index.js" ]