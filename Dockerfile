FROM node

WORKDIR /usr/node/app

COPY package*.json ./

RUN npm install
COPY . .
# RUN apt-get -q update && apt-get -qy install netcat
# RUN chmod +x wait-for.sh

EXPOSE 3000
ENV BUILD_ENV=docker
