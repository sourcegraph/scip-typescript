#!/usr/bin/env bash
set -eux

if [ $# -gt 1 ] && [ "$1" == "install" ]; then
	/usr/local/bin/actual-yarn "$@" || echo "scip-typescript: ignoring yarn install failure, will try to auto-index the project with partial dependency information"
else
	/usr/local/bin/actual-yarn "$@"
fi
