# Keep in sync with Dockerfile.autoindex
FROM node:17.7.1-alpine3.14@sha256:cbb62fa2f740959b173b180e4806a5e479fbbd7a20072c3d6b4283bf2b9951d1

ARG TAG

RUN apk add --no-cache git curl

RUN yarn global add @sourcegraph/scip-typescript@${TAG} @sourcegraph/src

CMD ["/bin/sh"]
