FROM sourcegraph/src-cli:3.39.1@sha256:418225d34348a80613a6a20c6c0203d95a74a33adc6fb6e6f45af84ff60beff0 AS src-cli

# Keep in sync with Dockerfile.autoindex
FROM node:17.7.1-alpine3.14@sha256:cbb62fa2f740959b173b180e4806a5e479fbbd7a20072c3d6b4283bf2b9951d1

ARG TAG

RUN apk add --no-cache git

COPY --from=src-cli /usr/bin/src /usr/bin

RUN npm install -g @sourcegraph/scip-typescript@${TAG}

CMD ["/bin/sh"]
