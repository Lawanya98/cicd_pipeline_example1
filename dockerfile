FROM node:latest

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]