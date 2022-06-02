#!/usr/bin/env bash
set -eux

if [ $# -gt 0 ] && [ "$1" == "install" ]; then
	/usr/local/bin/actual-npm "$@" || true
else
	/usr/local/bin/actual-npm "$@"
fi
