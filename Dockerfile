FROM node:8-alpine

ADD . /app

WORKDIR /app

RUN npm i --production

ENTRYPOINT ["npm", "start"]
