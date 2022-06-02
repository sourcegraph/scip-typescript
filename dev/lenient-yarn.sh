#!/usr/bin/env bash
set -eux

if [ $# -gt 1 ] && [ "$1" == "install" ]; then
	/usr/local/bin/actual-yarn "$@" || true
else
	/usr/local/bin/actual-yarn "$@"
fi
