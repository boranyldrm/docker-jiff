FROM node:10

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

ENV demo "mpc-as-a-service"

CMD ["sh", "-c", "node demos/${demo}/server.js"]