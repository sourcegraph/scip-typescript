# scip-typescript

[SCIP](https://github.com/sourcegraph/scip) indexer for TypeScript and JavaScript.

## Quick start

### Installation

```sh
npm install -g @sourcegraph/scip-typescript
```

Currently, Node v18, Node v20 are supported. <!-- Source of truth: .github/workflows/ci.yml -->

### Indexing a TypeScript project

Navigate to the project root, containing `tsconfig.json`.

```sh
npm install # or yarn install
scip-typescript index
```

### Indexing a JavaScript project

Navigate to the project root, containing `package.json`.

```sh
npm install # or yarn install
scip-typescript index --infer-tsconfig
```

To improve the quality of indexing results for JavaScript,
consider adding `@types/*` packages as `devDependencies` in `package.json`.

### Index a TypeScript project using Yarn workspaces

Navigate to the project root, containing `package.json`.

```sh
yarn install

scip-typescript index --yarn-workspaces
```

### Index a TypeScript project using pnpm workspaces

Navigate to the project root, containing `package.json`.

```sh
pnpm install

scip-typescript index --pnpm-workspaces
```

### Indexing in CI

Add the following run steps to your CI pipeline:

```sh
npm install -g @sourcegraph/scip-typescript @sourcegraph/src
npm install # or yarn install
scip-typescript index
# Upload index with any necessary tokens (shown here using GitHub workflow syntax)
src lsif upload -github-token='${{ secrets.GITHUB_TOKEN }}' -no-progress
```

For more examples, see the
[Sourcegraph docs](https://docs.sourcegraph.com/code_intelligence/how-to/index_a_typescript_and_javascript_repository).

### Troubleshooting stalled progress

If `scip-typescript index` is not showing progress, try running it again with
the `--progress-bar` flag. The progress bar prints out the current file being
indexed that could reveal details why progress is stalling. The progress bar
is disabled by default because it prints out a lot of noise in CI logs, and
the most common environment to run scip-typescript is in CI.

### Dealing with out of memory issues (OOM)

You may experience OOM issues when indexing large codebases

```
<--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
 1: 0xb7b150 node::Abort() [node]
 2: 0xa8c89a  [node]
 3: 0xd62ea0 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
 4: 0xd63247 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
 5: 0xf40945  [node]
 6: 0xf52e2d v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 ...
```

To fix this problem, try one of the following steps:

- Add `--no-global-caches` to the index command like this `scip-typescript
index --no-global-caches REST_OF_THE_COMMAND`. By default, scip-typescript
  caches symbol indexing across TypeScript projects to speed up indexing. This
  cache increases the memory footprint, which can cause OOM. Disabling this cache
  slows down indexing but reduces the memory footprint.
- Increase memory to the Node.js process by running scip-typescript like this
  `node --max-old-space-size=16000 "$(which scip-typescript)" index REST_OF_COMMAND`.
  Replace 16000 with an even larger number if your computer has bigger RAM.

## Migrating from lsif-node

Before creating scip-typescript, we used another TypeScript indexer called
[lsif-node](https://github.com/sourcegraph/lsif-node). We recommend migrating
to scip-typescript if you are using lsif-node.

Follow the steps below to migrate from lsif-node to scip-typescript:

- Replace usages of the `lsif-tsc -p ARGUMENTS` command with `scip-typescript index ARGUMENTS`.
- Upgrade to the latest version of the `src` command-line interface, which you
  can install via `yarn global add @sourcegraph/src`. It’s okay if the version
  of your `src` command-line interface does not match the version of your
  Sourcegraph instance.

## Contributing

See [Development.md](./Development.md) for docs on how to work on this project.

Contributors should follow the [Sourcegraph Community Code of Conduct](https://handbook.sourcegraph.com/company-info-and-process/community/code_of_conduct/).
