FROM sourcegraph/src-cli:3.38.0@sha256:5d26b9225268c5e49f24ceedf7bae303c9e34640faae3f254f4c8f312d77d4cb AS src-cli

# Keep in sync with Dockerfile.autoindex
FROM node:17.9.0-alpine3.14@sha256:eb66d0764468ec142edbddeb513b0e591c89e08a0b1d0c9bf23f9284c7611603

ARG TAG

RUN apk add --no-cache git

COPY --from=src-cli /usr/bin/src /usr/bin

RUN npm install -g @sourcegraph/lsif-typescript@${TAG}

CMD ["/bin/sh"]
