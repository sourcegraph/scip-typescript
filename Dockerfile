# When updating the version of the base container, please use the
# SHA256 listed under 'Index digest' on Docker Hub,
# not the 'Manifest digest'.
#
# This ensures that when pulling the container, Docker will detect
# the platform and pull the correct image (if it exists)
#
# Alternate way of determining the Index digest using the docker CLI.
#
# $ docker buildx imagetools inspect node:24.22.1-slim
# Name:      docker.io/library/node:24.22.1-slim
# MediaType: application/vnd.oci.image.index.v1+json
# Digest:    sha256:55fb5f5a527ea2c5c4a95f963e48ef90aa38c7b346054fdc8ee9957a2b55d205
# And use this digest in FROM
ARG base_sha=55fb5f5a527ea2c5c4a95f963e48ef90aa38c7b346054fdc8ee9957a2b55d205

FROM node:24.22.1-slim@sha256:${base_sha}

# --use-openssl-ca makes Node (and npm/yarn/pnpm) trust the Debian CA store
# instead of the CA list compiled into each Node binary. This also covers older
# Node versions that auto-indexing installs with `n install auto`, whose bundled
# CA lists can't be patched.
ENV NODE_OPTIONS="--max-old-space-size=4096 --use-openssl-ca"

RUN apt-get update && \
    apt-get install -y --no-install-recommends git bash curl ca-certificates python3 make build-essential automake autoconf && \
    rm -rf /var/lib/apt/lists/* && \
    npm install -g n@10.2.0 yarn@1.22.22 pnpm@11.22.0 --force

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --ignore-scripts

COPY . .
RUN yarn build && npm install -g . --ignore-scripts

WORKDIR /src

RUN mv /usr/local/bin/yarn /usr/local/bin/actual-yarn
COPY ./dev/lenient-yarn.sh /usr/local/bin/yarn

RUN mv /usr/local/bin/npm /usr/local/bin/actual-npm
COPY ./dev/lenient-npm.sh /usr/local/bin/npm

RUN mv /usr/local/bin/n /usr/local/bin/actual-n
COPY ./dev/lenient-n.sh /usr/local/bin/n

ENTRYPOINT ["scip-typescript"]
