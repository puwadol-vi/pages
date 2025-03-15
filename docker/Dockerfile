FROM node:22  AS builder

WORKDIR /usr/src/app

COPY package.json tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts ./

RUN yarn global add typescript

RUN yarn install --production

COPY index.html ./
COPY ./src ./src

RUN yarn build

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]