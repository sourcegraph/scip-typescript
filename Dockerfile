# Keep in sync with Dockerfile.autoindex
FROM node:20.8.1-alpine3.18@sha256:1ccb0c0ded3b21cee95fe6b6ce1ac23bd6680c8f152cbfb3047d5d9ea490b098

ARG TAG

RUN apk add --no-cache git curl

RUN yarn global add npm yarn

RUN yarn global add @sourcegraph/scip-typescript@${TAG} @sourcegraph/src

CMD ["/bin/sh"]
