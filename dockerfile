FROM node:latest

WORKDIR /server

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]