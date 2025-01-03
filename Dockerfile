FROM node:22

WORKDIR /usr/src/app

COPY vite.config.ts ./
COPY ./package.json ./

RUN npm install

COPY index.html ./
COPY ./src ./src

EXPOSE 8000

CMD ["npm", "run", "dev"]