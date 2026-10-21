# Developing scip-typescript

Development requires Node.js 22 or 24 and Yarn `v1.22.22`. The versions used by
the project are recorded in `.tool-versions` and `package.json`.

## References

- VS Code is a good reference point for the "correct" behavior
  for code navigation functionality.
- Keep a local checkout of Microsoft/TypeScript for checking out code examples.
  Most TypeScript APIs are lacking in documentation,
  so reading the code is the best way to understand how things work.

## Running tests

```sh
# Type-check and compile the project
npm run build
# Run snapshot tests
npm run test
# Run formatting and lint checks
npm run prettier-check
npm run eslint
# Update snapshot test outputs
npm run update-snapshots
```

## Debugging

### Print debugging

For print debugging, you can print types using:

```typescript
checker.typeToString(type)
```

TODO: Document how to print the AST for a file

TODO: Document how to print an individual AST node

## Skipping files/test for local development

Search for the query `"Uncomment below if you want to skip` to find places where
you can uncomment code to skip tests/files for a faster edit/test/debug feedback
loop during local development.

## Snapshotting arbitrary projects

```sh
cd /path/to/dir
DIR=/path/to/scip-typescript "$DIR/node_modules/.bin/tsx" "$DIR/src/main.ts" index # add --yarn-workspaces if applicable
lsif-typed index.scip > dump.lsif # from github.com/sourcegraph/sourcegraph/lib/codeintel/tools/lsif-typed
lsif-java snapshot-lsif # from github.com/sourcegraph/lsif-java
```

## Publishing a release

First, make sure you have no dirty changes. Then run the `dev/bump-version`
script. It creates a `release/vX.Y.Z` branch from the latest `main`, bumps the
version in package.json, pushes the branch and opens a release PR.

```
./dev/bump-version VERSION_TO_RELEASE
# example: ./dev/bump-version 2.3.1
```

Once the release PR is merged, tag the merge commit on `main` and push the tag
to trigger the release job (use the name of your remote for
sourcegraph/scip-typescript instead of `origin` if it differs):

```
git fetch origin main
git show origin/main:package.json | grep '"version"' # should show the new version
git tag -a v2.3.1 -m "Version 2.3.1" origin/main
git push origin v2.3.1
```

Once the release job has finished, create a GitHub release
https://github.com/sourcegraph/scip-typescript/releases/new
