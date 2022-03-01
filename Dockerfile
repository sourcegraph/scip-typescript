FROM sourcegraph/src-cli:3.37.0@sha256:985bf866cfbd9cac6140169daf3f3b925ca5a8b4d82519b1bd847adeae574172 AS src-cli

FROM node:14.5-alpine3.10@sha256:7fb1e608dc4081c25930db83cb4a5df884b6a3f6e4e9f5fa2df08f22778fcfad

ARG TAG

RUN apk add --no-cache git

COPY --from=src-cli /usr/bin/src /usr/bin

RUN npm install -g @sourcegraph/lsif-typescript@${TAG}

CMD ["/bin/sh"]
