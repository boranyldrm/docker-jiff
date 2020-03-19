FROM node:10

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

ENV name ""

CMD ["node", "demos/${name}/server.js" ]