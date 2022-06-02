# Keep in sync with Dockerfile.autoindex
FROM node:18-alpine3.15@sha256:0677e437543d10f6cb050d92c792a14e5eb84340e3d5b4c25a88baa723d8a4ae

ARG TAG

RUN apk add --no-cache git curl

RUN yarn global add npm yarn

RUN yarn global add @sourcegraph/scip-typescript@${TAG} @sourcegraph/src

CMD ["/bin/sh"]
