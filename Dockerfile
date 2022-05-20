FROM sourcegraph/src-cli:3.40.0@sha256:d3e2b4a9734fb729e7a8b4d220a4e181b6fb83ce407afa93dc509fa013a0e511 AS src-cli

# Keep in sync with Dockerfile.autoindex
FROM node:17.7.1-alpine3.14@sha256:cbb62fa2f740959b173b180e4806a5e479fbbd7a20072c3d6b4283bf2b9951d1

ARG TAG

RUN apk add --no-cache git

COPY --from=src-cli /usr/bin/src /usr/bin

RUN npm install -g @sourcegraph/scip-typescript@${TAG}

CMD ["/bin/sh"]
