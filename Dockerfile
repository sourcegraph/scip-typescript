FROM sourcegraph/src-cli:3.16.1@sha256:b5dd688d25557eaa5fb0ec33cf2cc15a87bc72a7f5d9efa6d5e461644e93ac09 AS src-cli

FROM node:14.5-alpine3.10@sha256:7fb1e608dc4081c25930db83cb4a5df884b6a3f6e4e9f5fa2df08f22778fcfad

ARG TAG

RUN apk add --no-cache git

COPY --from=src-cli /usr/bin/src /usr/bin

RUN npm install -g @sourcegraph/lsif-typescript@${TAG}

CMD ["/bin/sh"]
