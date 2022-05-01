FROM sourcegraph/src-cli:3.38.0@sha256:5d26b9225268c5e49f24ceedf7bae303c9e34640faae3f254f4c8f312d77d4cb AS src-cli

# Keep in sync with Dockerfile.autoindex
FROM node:18.0.0-alpine3.14@sha256:a2293129f187b5eebefa3c8d2a4401c43656b56574d421d024fa3883c164019d

ARG TAG

RUN apk add --no-cache git

COPY --from=src-cli /usr/bin/src /usr/bin

RUN npm install -g @sourcegraph/lsif-typescript@${TAG}

CMD ["/bin/sh"]
