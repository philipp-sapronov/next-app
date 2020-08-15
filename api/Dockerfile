#### Developmet stage ####
FROM node:14.5.0-alpine3.11

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn install

COPY tsconfig.json tsconfig.build.json gulpfile.js .eslintrc.json nest-cli.json .prettierrc webpack.config.js ./
COPY src ./src

RUN yarn build && yarn start

# ARG env
#ARG port

