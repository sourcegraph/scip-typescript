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
scip snapshot # from github.com/sourcegraph/scip
```

## Publishing a release

A [scheduled workflow](.github/workflows/scheduled-release.yml) opens a patch
release PR every 4 weeks on Monday, even without code changes, so the Docker
image picks up the latest base image and Debian package updates. It can also be
run on demand from the
[GitHub Actions UI](https://github.com/sourcegraph/scip-typescript/actions/workflows/scheduled-release.yml).

To open a release PR by hand, make sure you have no dirty changes and run the
`dev/bump-version` script. It creates a `release/vX.Y.Z` branch from the latest
`main`, bumps the version in package.json, pushes the branch and opens a release
PR.

```
./dev/bump-version VERSION_TO_RELEASE
# example: ./dev/bump-version 2.3.1
```

Once a release PR is merged, the [tag workflow](.github/workflows/tag-release.yml)
pushes the `vX.Y.Z` tag and starts the [release workflow](.github/workflows/release.yml),
which publishes the npm package and the Docker image and creates a GitHub release
with notes generated from the merged PRs.
