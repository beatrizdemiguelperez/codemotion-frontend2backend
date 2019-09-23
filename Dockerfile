FROM node:carbon-alpine

# Create app directory
WORKDIR /usr/src/src

# Bundle app source
COPY . .

RUN npm rebuild && \
  npm install --quiet

# EXPOSE 8080
CMD [ "npm", "start" ]
