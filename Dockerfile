# Keep in sync with Dockerfile.autoindex
FROM node:18-alpine3.15@sha256:2c39f72a07d4c2caef2ffc0a17049978111a467c7a6a2bba5b903373573384fe

ARG TAG

RUN apk add --no-cache git curl

RUN yarn global add npm yarn

RUN yarn global add @sourcegraph/scip-typescript@${TAG} @sourcegraph/src

CMD ["/bin/sh"]
