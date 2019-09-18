FROM ubuntu:latest

RUN apt-get update && apt-get -y upgrade && apt-get -y install curl git

ENV NODE_VERSION 10.x
ENV NPM_VERSION 6.9.0

RUN curl -sL https://deb.nodesource.com/setup_"$NODE_VERSION" | bash
RUN apt-get install -y nodejs
RUN npm install -g npm@"$NPM_VERSION"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

ENV PORT 8080
EXPOSE 8080

RUN npm install
RUN npm run build
CMD npm start
