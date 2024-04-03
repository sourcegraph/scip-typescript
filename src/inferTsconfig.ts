import * as fs from 'fs'
import * as path from 'path'

/**
 * To limit the risk of making the `inferTsconfig` run for a very long time, we
 * stop the file traversal after visiting this number of files.
 */
const maximumFileTraversalCount = 1_000

/** The TS config we use to index JavaScript files. */
export const allowJsConfig = '{"compilerOptions":{"allowJs":true}}'

/** The TS config we use to index only TypeScript files. */
export const noJsConfig = '{}'

/**
 * Returns the configuration that should be used for tsconfig.json in the provided path.
 *
 * If the directory contains at least one `*.{ts,tsx}` file then the config will be empty (`{}`).
 * If the directory doesn't contains one `*.{ts,tsx}` file then the config will
 */
export function inferTsconfig(projectPath: string): string {
  let hasTypeScriptFile = false
  let hasJavaScriptFile = false
  let visitedFileCount = 0
  const visitPath = (directory: string): { stop: boolean } => {
    if (directory.endsWith('.ts') || directory.endsWith('.tsx')) {
      hasTypeScriptFile = true
      return { stop: true }
    }
    if (directory.endsWith('.js') || directory.endsWith('.jsx')) {
      hasJavaScriptFile = true
    }
    if (!fs.statSync(directory).isDirectory()) {
      return { stop: false }
    }
    for (const child of fs.readdirSync(directory)) {
      if (child === 'node_modules') {
        continue
      }
      visitedFileCount++
      if (visitedFileCount > maximumFileTraversalCount) {
        return { stop: true }
      }
      const fullPath = path.resolve(directory, child)
      const recursiveWalk = visitPath(fullPath)
      if (recursiveWalk.stop) {
        return recursiveWalk
      }
    }
    return { stop: false }
  }
  visitPath(projectPath)
  if (hasTypeScriptFile || !hasJavaScriptFile) {
    return noJsConfig
  }
  return allowJsConfig
}
