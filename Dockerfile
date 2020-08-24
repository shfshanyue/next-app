FROM node:12-alpine

ADD package.json yarn.lock /code/
WORKDIR /code

ENV NODE_ENV=production
RUN yarn && yarn build

ADD . /code

EXPOSE 3000
CMD yarn start

