#!/usr/bin/env bash
set -eux


if [ $# -gt 0 ] && [ "$1" == "install" ]; then
	/usr/local/bin/actual-npm "$@" || echo "scip-typescript: ignoring npm install failure, will try to auto-index the project with partial dependency information"
else
	/usr/local/bin/actual-npm "$@"
fi
