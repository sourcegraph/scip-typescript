FROM sourcegraph/src-cli:3.38.0@sha256:5d26b9225268c5e49f24ceedf7bae303c9e34640faae3f254f4c8f312d77d4cb AS src-cli

FROM node:14.5-alpine3.10@sha256:7fb1e608dc4081c25930db83cb4a5df884b6a3f6e4e9f5fa2df08f22778fcfad

ARG TAG

RUN apk add --no-cache git

COPY --from=src-cli /usr/bin/src /usr/bin

RUN npm install -g @sourcegraph/lsif-typescript@${TAG}

CMD ["/bin/sh"]
