# lsif-typescript

LSIF indexer for TypeScript and JavaScript.

## Quick start

### Installation

```sh
npm install -g @sourcegraph/lsif-typescript
```

### Indexing a TypeScript project

Navigate to the project root, containing `tsconfig.json`.

```sh
npm install # or yarn install
lsif-typescript index
```

### Indexing a JavaScript project

Navigate to the project root, containing `package.json`.

```sh
npm install # or yarn install
lsif-typescript index --infer-tsconfig
```

To improve the quality of indexing results for JavaScript,
consider adding `@types/*` packages as `devDependencies` in `package.json`.

### Index a TypeScript project using Yarn workspaces

Navigate to the project root, containing `package.json`.

```
npm install # or yarn install
lsif-typescript index --yarn-workspaces
```

### Indexing in CI

Add the following run steps to your CI pipeline:

```sh
npm install -g @sourcegraph/lsif-typescript
npm install # or yarn install
lsif-typescript index
# From https://github.com/sourcegraph/src-cli/
src lsif upload
```

`src lsif upload` may need additional arguments
such as `-github-token`, depending on your setup.

For more examples, see the
[Sourcegraph docs](https://docs.sourcegraph.com/code_intelligence/how-to/index_a_typescript_and_javascript_repository).

## Contributing

See [Development.md](./Development.md) for docs on how to work on this project.

Contributors should follow the [Sourcegraph Community Code of Conduct](https://handbook.sourcegraph.com/company-info-and-process/community/code_of_conduct/).
