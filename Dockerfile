FROM node:18 AS builder

WORKDIR /app

RUN rm -rf node_modules

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "dev" ]