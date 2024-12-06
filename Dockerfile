# Keep in sync with default Dockerfile
FROM node:22.12.0-slim@sha256:a4b757cd491c7f0b57f57951f35f4e85b7e1ad54dbffca4cf9af0725e1650cd8

ENV NODE_OPTIONS=--max-old-space-size=4096

RUN apt update && \
    apt install -y git bash curl ca-certificates python3 make build-essential automake autoconf curl && \
    rm -rf /var/lib/apt/lists/* && \
    npm install -g n yarn pnpm --force

WORKDIR /app

COPY . .
RUN npm install && npm run build && npm install -g .

WORKDIR /src

RUN mv /usr/local/bin/yarn /usr/local/bin/actual-yarn
COPY ./dev/lenient-yarn.sh /usr/local/bin/yarn

RUN mv /usr/local/bin/npm /usr/local/bin/actual-npm
COPY ./dev/lenient-npm.sh /usr/local/bin/npm

RUN mv /usr/local/bin/n /usr/local/bin/actual-n
COPY ./dev/lenient-n.sh /usr/local/bin/n

ENTRYPOINT ["scip-typescript"]
