FROM node:21-alpine

EXPOSE 5000

WORKDIR /app

COPY package.json /app/

COPY . .

RUN npm install

CMD [ "npm" , "start" ]
