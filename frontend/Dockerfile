#### Developmet stage ####
FROM node:14.5.0-alpine3.11 as dev

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn install

COPY .eslintrc.js next.config.js .prettierrc ./
COPY pages ./pages
COPY public ./public
COPY src ./src

ARG NODE_ENV

#ARG port
ENV NODE_ENV=$NODE_ENV
#ENV PORT=$port

#### Build stage ####
FROM dev as build
ENV BUILD_DIR=out
RUN yarn build

#### Production stage ####
FROM nginx:1.19.1-alpine as prod
WORKDIR /usr/app
COPY --from=build /usr/app/out ./
COPY nginx.conf /etc/nginx/nginx.conf