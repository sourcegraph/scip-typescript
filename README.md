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
lsif-typescript index
```

### Indexing a JavaScript project

Navigate to the project root, containing `package.json`.

```sh
lsif-typescript index --infer-tsconfig
```

### Index a TypeScript project using Yarn workspaces

Navigate to the project root, containing `package.json`.

```
lsif-typescript index --yarn-workspaces.
```

### Indexing in CI

Add the following run steps to your CI pipeline:

```sh
npm install -g @sourcegraph/lsif-typescript
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
