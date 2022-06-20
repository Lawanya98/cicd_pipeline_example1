FROM node:latest

WORKDIR project

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]