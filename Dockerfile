FROM node:slim

# Create App Directory
RUN mkdir -p /app
WORKDIR /app

# Install Dependencies For Server
COPY package*.json /app/
RUN cd /app/
RUN npm install

# Bundle App Source
COPY . /app

RUN mkdir -p /angular-src
WORKDIR /angular-src/



COPY ./angular-src/package*.json /angular-src/

WORKDIR /angular-src/
RUN npm install

COPY ./angular-src /angular-src


WORKDIR /app
RUN ls

EXPOSE 3000
CMD ["npm", "start"]