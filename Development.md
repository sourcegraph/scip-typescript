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

## Snapshotting arbitrary projects

```sh
cd /path/to/dir
DIR=/path/to/scip-typescript "$DIR/node_modules/.bin/ts-node" "$DIR/src/main.ts" index # add --yarn-workspaces if applicable
lsif-typed index.scip > dump.lsif # from github.com/sourcegraph/sourcegraph/lib/codeintel/tools/lsif-typed
lsif-java snapshot-lsif # from github.com/sourcegraph/lsif-java
```

## Publishing a release

1. Run the `dev/bump-version` script. This will create a PR with the ChangeLog.
   ```
   GITHUB_TOKEN="" ./dev/bump-version <version>
   ```
   The GitHub token is needed because fetching PR information for generating
   the ChangeLog can run into GitHub rate limits.
2. After the PR is merged, update your `main` branch and tag the commit.
   ```sh
   git checkout main
   git pull --ff-only
   git tag v<version>
   git push v<version>
   ```
   A GitHub Action should be triggered by the push; it will publish:
   - A new version of scip-typescript to npm.
   - A Docker image to Docker hub, using the new version of scip-typescript.
