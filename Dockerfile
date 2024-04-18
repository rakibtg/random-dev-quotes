FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 3000

ENV PORT 3000

CMD [ "node", "app.js" ]
