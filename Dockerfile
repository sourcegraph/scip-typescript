# Keep in sync with Dockerfile.autoindex
FROM node:18-alpine3.15@sha256:ada5768c447c7baebe406baf791c0edc3db2349b09c47783dd629f1a6119a97a

ARG TAG

RUN apk add --no-cache git curl

RUN yarn global add npm yarn

RUN yarn global add @sourcegraph/scip-typescript@${TAG} @sourcegraph/src

CMD ["/bin/sh"]
