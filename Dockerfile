FROM node:18-alpine

RUN npm i pnpm -g
WORKDIR /code
ADD package.json pnpm-lock.yaml /code/
RUN pnpm

ENV NODE_ENV=production

ADD . /code
RUN yarn build

EXPOSE 3000
CMD yarn start
