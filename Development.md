# Developing scip-typescript

## References

- VS Code is a good reference point for the "correct" behavior
  for code navigation functionality.
- Keep a local checkout of Microsoft/TypeScript for checking out code examples.
  Most TypeScript APIs are lacking in documentation,
  so reading the code is the best way to understand how things work.

## Running tests

```sh
npm run test
```

```
npm run update-snapshots
```

Generate snapshots and update.

## Skipping files/test for local development

Search for the query `"Uncomment below if you want to skip` to find places where
you can uncomment code to skip tests/files for a faster edit/test/debug feedback
loop during local development.

## Snapshotting arbitrary projects

```sh
cd /path/to/dir
DIR=/path/to/scip-typescript "$DIR/node_modules/.bin/ts-node" "$DIR/src/main.ts" index # add --yarn-workspaces if applicable
lsif-typed index.scip > dump.lsif # from github.com/sourcegraph/sourcegraph/lib/codeintel/tools/lsif-typed
lsif-java snapshot-lsif # from github.com/sourcegraph/lsif-java
```

## Publishing a release

First, make sure you are on the main branch and have no dirty changes.

Next, run the `dev/bump-version` script to bump the version in package.json and
push a git tag to trigger a CI job.
```
./dev/bump-version VERSION_TO_RELEASE
# example: ./dev/bump-version 2.3.1
```

Once the release job has finished, create a GitHub release
https://github.com/sourcegraph/scip-typescript/releases/new
