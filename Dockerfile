# Keep in sync with Dockerfile.autoindex
FROM node:18-alpine3.15@sha256:e2e77eeb87e4f6f5388f786a878dd1589a03298f84e8805bc75251d9db01af3e

ARG TAG

RUN apk add --no-cache git curl

RUN yarn global add npm yarn

RUN yarn global add @sourcegraph/scip-typescript@${TAG} @sourcegraph/src

CMD ["/bin/sh"]
