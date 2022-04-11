# Developing lsif-typescript

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
npm run build # build lsif-typescript
cd /path/to/dir
node /path/to/lsif-typescript/dist/src/main.js index # add --yarn-workspaces if applicable
lsif-typed dump.lsif-typed > dump.lsif # from github.com/sourcegraph/sourcegraph/lib/codeintel/tools/lsif-typed
lsif-java snapshot-lsif # from github.com/sourcegraph/lsif-java
```

## Publishing a release

Tag a commit on the `main` branch, and push the tag.

```sh
git tag v<version>
git push v<version>
```

A GitHub Action should be triggered by the push and publish:
- A new version of lsif-typescript to npm.
- A Docker image to Docker hub, using the new version of lsif-typescript.
