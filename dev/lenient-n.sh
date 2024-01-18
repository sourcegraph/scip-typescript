#!/usr/bin/env bash
set -eux

/usr/local/bin/actual-n "$@" || echo "scip-typescript: ignoring n auto failure, will try to auto-index the project with the pre-installed node version"
