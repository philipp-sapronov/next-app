#### Developmet stage ####
FROM node:14.5.0-alpine3.11 as dev

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY gulpfile.js .eslintrc.json .babelrc .prettierrc.json webpack.config.js ./
COPY src ./src

ARG env
ARG port
ENV NODE_ENV=$env
ENV PORT=$port

#### Build stage ####
FROM dev as build
ENV BUILD_DIR=dist
RUN npm run build

#### Production stage ####
FROM nginx:1.19.1-alpine as prod
WORKDIR /usr/app
COPY --from=build /usr/app/dist ./
COPY nginx.conf /etc/nginx/nginx.conf