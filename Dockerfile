FROM node:dubnium-alpine
WORKDIR /usr/src/app
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --verbose
COPY . ./

EXPOSE 3001
ENTRYPOINT ["npm","start"];
