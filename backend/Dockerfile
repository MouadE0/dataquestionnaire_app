FROM node:20-alpine

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build
EXPOSE 8000
CMD [ "node", "dist/index.js" ]
