FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --production

RUN npm install -g pm2

COPY . .

RUN npm run build

COPY .next ./.next


COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]

