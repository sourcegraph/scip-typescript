# scip-typescript

[SCIP](https://github.com/sourcegraph/scip) indexer for TypeScript and JavaScript.

## Quick start

### Installation

```sh
npm install -g @sourcegraph/scip-typescript
```

Currently, Node v14, Node v16 and Node v18 are supported. <!-- Source of truth: .github/workflows/ci.yml -->

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
npm install # or yarn install
scip-typescript index --yarn-workspaces
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
