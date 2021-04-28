FROM node

WORKDIR /usr/node/app

COPY package*.json ./

RUN npm install
COPY . .
ENV BUILD_ENV=docker
RUN apt-get -q update && apt-get -qy install netcat
RUN chmod +x wait-for.sh

EXPOSE 3000
CMD BUILD_ENV=DB_HOST 
