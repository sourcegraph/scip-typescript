import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

import { svelte2tsx } from 'svelte2tsx'
import * as ts from 'typescript'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { GlobalCache, ProjectOptions } from './CommandLineOptions'
import { ProjectIndexer } from './ProjectIndexer'
import * as scip from './scip'
import { SourceInfo } from './SourceInfo'
import { SvelteSupport } from './Svelte'

test('svelte2tsx generated declaration conventions', () => {
  const transformed = svelte2tsx(
    `<script lang="ts" generics="Value">
      let { value }: { value: Value } = $props()
    </script>
    <span>{value}</span>`,
    {
      filename: 'Generic.svelte',
      isTsFile: true,
      emitOnTemplateError: true,
    }
  )

  // SvelteSourceInfo canonicalizes these declarations. If an upgrade changes
  // them, update the normalization and documentation filtering together.
  assert.ok(transformed.code.includes('function $$render'))
  assert.ok(transformed.code.includes('type $$ComponentProps'))
  assert.ok(transformed.code.includes('Generic__SvelteComponent_'))

  const legacy = svelte2tsx(
    `<script lang="ts">
      import { count } from './stores'
      export let value: string
    </script>
    <span>{$count}: {value}</span>`,
    {
      filename: 'Legacy.svelte',
      isTsFile: true,
      emitOnTemplateError: true,
    }
  )
  assert.ok(legacy.code.includes('return { props:'))
  assert.ok(legacy.code.includes('as {value: string}'))
  assert.ok(legacy.code.includes('let $count = __sveltets_2_store_get(count)'))

  const javascript = svelte2tsx(`<script>export let enabled = false</script>`, {
    filename: 'Javascript.svelte',
    isTsFile: false,
    emitOnTemplateError: true,
  })
  assert.ok(javascript.code.includes('props: {enabled: enabled}'))
})

test('Svelte host preserves modern module resolution and rune modules', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'scip-svelte-'))
  try {
    const packageDirectory = path.join(directory, 'node_modules', 'dual')
    fs.mkdirSync(packageDirectory, { recursive: true })
    fs.writeFileSync(
      path.join(packageDirectory, 'package.json'),
      JSON.stringify({
        name: 'dual',
        exports: {
          '.': {
            import: './import.d.ts',
            require: './require.d.ts',
          },
        },
      })
    )
    fs.writeFileSync(path.join(packageDirectory, 'import.d.ts'), 'export {}')
    fs.writeFileSync(path.join(packageDirectory, 'require.d.ts'), 'export {}')

    const options: ts.CompilerOptions = {
      module: ts.ModuleKind.NodeNext,
      moduleResolution: ts.ModuleResolutionKind.NodeNext,
    }
    const host = ts.createCompilerHost(options)
    const sourceInfos = new Map<ts.SourceFile, SourceInfo>()
    const svelte = new SvelteSupport(host, options, sourceInfos)
    const containingFile = path.join(directory, 'index.mts')
    const sourceFile = ts.createSourceFile(
      containingFile,
      "import 'dual'",
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS
    )
    sourceFile.impliedNodeFormat = ts.ModuleKind.ESNext
    const statement = sourceFile.statements[0]
    assert.ok(ts.isImportDeclaration(statement))
    assert.ok(ts.isStringLiteral(statement.moduleSpecifier))
    const [resolution] = svelte.resolveModuleNameLiterals(
      [statement.moduleSpecifier],
      containingFile,
      undefined,
      options,
      sourceFile
    )
    assert.ok(
      resolution.resolvedModule?.resolvedFileName.endsWith('import.d.ts')
    )

    const runeModule = path.join(directory, 'counter.svelte.ts')
    fs.writeFileSync(runeModule, 'export const count = 1')
    fs.writeFileSync(path.join(directory, 'counter.svelte'), '<p>component</p>')
    assert.is(svelte.readFile(runeModule), 'export const count = 1')

    const brokenComponent = path.join(directory, 'Broken.svelte')
    fs.writeFileSync(brokenComponent, '<script>')
    let transformError = ''
    const brokenSource = svelte.getSourceFile(
      brokenComponent,
      ts.ScriptTarget.Latest,
      message => {
        transformError = message
      }
    )
    assert.ok(brokenSource)
    assert.ok(transformError.includes('failed to transform'))
    assert.ok(sourceInfos.get(brokenSource)?.isSvelte)
  } finally {
    fs.rmSync(directory, { recursive: true, force: true })
  }
})

test('no-global-caches keeps Svelte source information project-local', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'scip-svelte-'))
  try {
    const fileName = path.join(directory, 'Component.svelte')
    fs.writeFileSync(fileName, '<h1>Hello</h1>\n')
    const cache: GlobalCache = {
      sources: new Map(),
      parsedCommandLines: new Map(),
      indexedFiles: new Set(),
      sourceInfos: new Map(),
    }
    const documents: scip.scip.Document[] = []
    const options: ProjectOptions = {
      cwd: directory,
      projectRoot: directory,
      projectDisplayName: directory,
      output: path.join(directory, 'index.scip'),
      inferTsconfig: false,
      progressBar: false,
      yarnWorkspaces: false,
      yarnBerryWorkspaces: false,
      pnpmWorkspaces: false,
      globalCaches: false,
      indexedProjects: new Set(),
      writeIndex: index => documents.push(...index.documents),
    }
    const config: ts.ParsedCommandLine = {
      options: {
        allowJs: true,
        allowNonTsExtensions: true,
        module: ts.ModuleKind.ESNext,
        moduleResolution: ts.ModuleResolutionKind.Bundler,
      },
      fileNames: [fileName],
      errors: [],
    }

    new ProjectIndexer(config, options, cache).index()

    assert.is(documents.length, 1)
    assert.is(documents[0].language, 'Svelte')
    assert.is(cache.sourceInfos.size, 0)
  } finally {
    fs.rmSync(directory, { recursive: true, force: true })
  }
})

test.run()
