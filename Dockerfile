FROM sourcegraph/src-cli:3.38.0@sha256:5d26b9225268c5e49f24ceedf7bae303c9e34640faae3f254f4c8f312d77d4cb AS src-cli

# Keep in sync with Dockerfile.autoindex
FROM node:17.7.1-alpine3.14@sha256:18b117c96fa5f24f3364a28968fdfce1fb4d37eb030083a6765cb6aa59f63254

ARG TAG

RUN apk add --no-cache git

COPY --from=src-cli /usr/bin/src /usr/bin

RUN npm install -g @sourcegraph/lsif-typescript@${TAG}

CMD ["/bin/sh"]
