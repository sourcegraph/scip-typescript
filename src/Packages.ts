import * as fs from 'fs'
import path from 'path'

import { packageDescriptor } from './Descriptor'
import { ScipSymbol } from './ScipSymbol'

export class Packages {
  public readonly projectRoot: string
  constructor(projectRoot: string) {
    // The project can be a directory or a tsconfig file, and either can be
    // relative to the working directory, while file names are absolute.
    const absolute = path.resolve(projectRoot)
    const directory = fs.statSync(absolute, { throwIfNoEntry: false })?.isFile()
      ? path.dirname(absolute)
      : absolute
    this.projectRoot = directory.replaceAll('\\', '/')
  }
  private cache: Map<string, ScipSymbol> = new Map()
  public symbol(fileName: string): ScipSymbol {
    if (path.normalize(fileName).replaceAll('\\', '/') !== fileName) {
      throw new Error(
        `unexpected error: path.normalize('${fileName}') !== ${fileName}`
      )
    }
    const owner = this.directorySymbol(path.dirname(fileName))
    return ScipSymbol.global(
      // A file outside the project root without a package.json above it keeps
      // only its file name, so symbols don't depend on where it's checked out.
      owner.isEmpty() ? ScipSymbol.anonymousPackage() : owner,
      packageDescriptor(path.basename(fileName))
    )
  }

  // Returns an empty symbol for a directory outside the project root that has
  // no package.json in it or in any of its parent directories.
  private directorySymbol(directory: string): ScipSymbol {
    const fromCache = this.cache.get(directory)
    if (fromCache) {
      return fromCache
    }
    const packageJsonPath = path.join(directory, 'package.json')
    try {
      if (
        fs.existsSync(packageJsonPath) &&
        fs.lstatSync(packageJsonPath).isFile()
      ) {
        const packageJsonText = fs.readFileSync(packageJsonPath).toString()
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const packageJson = JSON.parse(packageJsonText)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const name = packageJson.name
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const version = packageJson.version
        if (typeof name === 'string' && typeof version === 'string') {
          return this.cached(directory, ScipSymbol.package(name, version))
        }
        if (typeof name === 'string') {
          // The version field is missing so we fallback to `"HEAD"`
          return this.cached(directory, ScipSymbol.package(name, 'HEAD'))
        }
        // A package.json without a name (for example `{"type": "module"}` in
        // an `esm/` directory of a published package) doesn't name a package,
        // so keep looking in the parent directories for one that does.
      }
    } catch (error) {
      console.error(`error parsing ${packageJsonPath}`, error)
      return this.cached(directory, ScipSymbol.anonymousPackage())
    }

    if (directory === this.projectRoot) {
      // Don't look for package.json in a parent directory of the root.
      return this.cached(directory, ScipSymbol.anonymousPackage())
    }

    const parent = path.dirname(directory)
    if (parent === directory) {
      // We reached the filesystem root, so the directory is outside the project
      // root and no package.json owns it.
      return this.cached(directory, ScipSymbol.empty())
    }

    const owner = this.directorySymbol(parent)
    if (owner.isEmpty()) {
      return this.cached(directory, owner)
    }
    return this.cached(
      directory,
      ScipSymbol.global(owner, packageDescriptor(path.basename(directory)))
    )
  }

  private cached(directory: string, sym: ScipSymbol): ScipSymbol {
    this.cache.set(directory, sym)
    return sym
  }
}
