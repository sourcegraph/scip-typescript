#!/usr/bin/env bash
set -eux

ADDITIONAL_ARGS="--ignore-engines"
if [ "$(/usr/local/bin/actual-yarn --version | cut -d'.' -f1)" -gt 1 ]; then
	ADDITIONAL_ARGS=""
fi

if [ $# -gt 1 ] && [ "$1" == "install" ]; then
	/usr/local/bin/actual-yarn $ADDITIONAL_ARGS "$@" || echo "scip-typescript: ignoring yarn install failure, will try to auto-index the project with partial dependency information"
else
	/usr/local/bin/actual-yarn $ADDITIONAL_ARGS "$@"
fi
