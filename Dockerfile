FROM node:12

# Create app directory
RUN mkdir -p /app/

# Install app dependencies
COPY package*.json /app/

# Bundle app source
COPY . /app/

WORKDIR /app/

EXPOSE 3001

RUN yarn

CMD [ "yarn", "dev" ]
