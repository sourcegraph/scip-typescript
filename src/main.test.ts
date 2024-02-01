import * as fs from 'fs'
import { join } from 'path'
import * as path from 'path'
import * as process from 'process'

import * as Diff from 'diff'
import { test } from 'uvu'

import { Input } from './Input'
import { indexCommand } from './main'
import * as scip from './scip'
import { formatSnapshot } from './SnapshotTesting'

function isUpdateSnapshot(): boolean {
  return process.argv.includes('--update-snapshots')
}

const snapshotNodeModules = join(process.cwd(), 'snapshots', 'node_modules')
if (!fs.existsSync(snapshotNodeModules)) {
  throw new Error(
    `no such file: ${snapshotNodeModules} (to fix this problem, run 'yarn install' in the snapshots/ directory)`
  )
}
const inputDirectory = join(process.cwd(), 'snapshots', 'input')
const outputDirectory = join(process.cwd(), 'snapshots', 'output')

const snapshotDirectories = fs.readdirSync(inputDirectory)
const isUpdate = isUpdateSnapshot()
if (isUpdate && fs.existsSync(outputDirectory)) {
  fs.rmSync(outputDirectory, { recursive: true })
}
interface PackageJson {
  workspaces: string[]
  packageManager?: string
}
for (const snapshotDirectory of snapshotDirectories) {
  // Uncomment below if you want to skip certain tests for local development.
  // if (!snapshotDirectory.includes('syntax')) {
  //   continue
  // }
  const inputRoot = join(inputDirectory, snapshotDirectory)
  const outputRoot = join(outputDirectory, snapshotDirectory)
  if (!fs.statSync(inputRoot).isDirectory()) {
    continue
  }
  test(snapshotDirectory, () => {
    const packageJsonPath = path.join(inputRoot, 'package.json')
    const packageJson = JSON.parse(
      fs.readFileSync(packageJsonPath).toString()
    ) as PackageJson
    const tsconfigJsonPath = path.join(inputRoot, 'tsconfig.json')
    const inferTsconfig = !fs.existsSync(tsconfigJsonPath)
    const output = path.join(inputRoot, 'index.scip')
    indexCommand([], {
      cwd: inputRoot,
      inferTsconfig,
      output,
      yarnWorkspaces: Boolean(packageJson.workspaces),
      yarnBerryWorkspaces: false,
      pnpmWorkspaces: Boolean(packageJson.packageManager?.includes('pnpm')),
      progressBar: false,
      indexedProjects: new Set(),
      globalCaches: true,
      emitSignatures: true,
      emitExternalSymbols: true,
      followSourceMapping: true,
    })
    if (inferTsconfig) {
      fs.rmSync(tsconfigJsonPath)
    }
    const index = scip.scip.Index.deserializeBinary(
      fs.readFileSync(path.join(inputRoot, 'index.scip'))
    )
    fs.mkdirSync(outputRoot, { recursive: true })
    fs.renameSync(output, path.join(outputRoot, 'index.scip'))
    if (index.documents.length === 0) {
      throw new Error('empty LSIF index')
    }
    for (const document of index.documents) {
      const inputPath = path.join(inputRoot, document.relative_path)
      const relativeToInputDirectory = path.relative(inputDirectory, inputPath)
      const outputPath = path.resolve(outputDirectory, relativeToInputDirectory)
      const expected: string = fs.existsSync(outputPath)
        ? fs.readFileSync(outputPath).toString()
        : ''
      const input = Input.fromFile(inputPath)
      const obtained = formatSnapshot(input, document, index.external_symbols)
      if (obtained === expected) {
        // Test passed
        continue
      }
      if (isUpdate) {
        // Update the snapshot test to reflect the new behavior
        fs.mkdirSync(path.dirname(outputPath), {
          recursive: true,
        })
        fs.writeFileSync(outputPath, obtained)
        console.log(`updated snapshot: ${outputPath}`)
      } else {
        // Fail the test with a diff error message
        const patch = Diff.createTwoFilesPatch(
          outputPath,
          outputPath,
          expected,
          obtained,
          '(what the snapshot tests expect)',
          "(what the current code produces). Run the command 'npm run update-snapshots' to accept the new behavior."
        )
        throw new Error(patch)
      }
    }
  })
}

test.run()
