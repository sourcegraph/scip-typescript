# Keep in sync with Dockerfile.autoindex
FROM node:18-alpine3.15@sha256:cd3a7004267e419477bbfc50e0502df8607a0b9b4465092f6e2c2ce4092faa45

ARG TAG

RUN apk add --no-cache git curl

RUN yarn global add npm yarn

RUN yarn global add @sourcegraph/scip-typescript@${TAG} @sourcegraph/src

CMD ["/bin/sh"]
