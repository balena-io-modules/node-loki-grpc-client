FROM node:12@sha256:01627afeb110b3054ba4a1405541ca095c8bfca1cb6f2be9479c767a2711879e

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY *.json ./
COPY src ./src
COPY proto ./proto
RUN npm run build
COPY tests ./tests
