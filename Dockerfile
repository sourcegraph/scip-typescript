# Keep in sync with Dockerfile.autoindex
FROM node:20.12.0-alpine3.18@sha256:a7b87c23700cdffb83eba702cd2143ddce421ef7affb1d82d927dbad46224e2e

ARG TAG

RUN apk add --no-cache git curl

RUN yarn global add npm yarn

RUN yarn global add @sourcegraph/scip-typescript@${TAG} @sourcegraph/src

CMD ["/bin/sh"]
