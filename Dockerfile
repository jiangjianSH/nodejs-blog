FROM node:0.12.7-wheezy

MAINTAINER YeTing "me@yeting.info"

WORKDIR /app

COPY ./package.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD node bin/www