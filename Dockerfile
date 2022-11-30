# Keep in sync with Dockerfile.autoindex
FROM node:19-alpine3.15@sha256:12d9c7253f232bb88a9ef6d6e974afd90e296cb8383572dbb7f28c39f828b07e

ARG TAG

RUN apk add --no-cache git curl

RUN yarn global add npm yarn

RUN yarn global add @sourcegraph/scip-typescript@${TAG} @sourcegraph/src

CMD ["/bin/sh"]
