FROM node:12

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY *.json ./
COPY src ./src
COPY proto ./proto
COPY tests ./tests
RUN npm run build
