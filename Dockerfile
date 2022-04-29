FROM sourcegraph/src-cli:3.38.0@sha256:5d26b9225268c5e49f24ceedf7bae303c9e34640faae3f254f4c8f312d77d4cb AS src-cli

# Keep in sync with Dockerfile.autoindex
FROM node:17.7.1-alpine3.14@sha256:cbb62fa2f740959b173b180e4806a5e479fbbd7a20072c3d6b4283bf2b9951d1

ARG TAG

RUN apk add --no-cache git

COPY --from=src-cli /usr/bin/src /usr/bin

RUN npm install -g @sourcegraph/lsif-typescript@${TAG}

CMD ["/bin/sh"]
