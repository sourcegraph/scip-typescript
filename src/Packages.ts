import * as fs from 'fs'
import path from 'path'

import { packageDescriptor } from './Descriptor'
import { ScipSymbol } from './ScipSymbol'

export class Packages {
  constructor(public readonly projectRoot: string) {}
  private cache: Map<string, ScipSymbol> = new Map()
  public symbol(filePath: string): ScipSymbol {
    if (path.normalize(filePath) !== filePath) {
      throw new Error(
        `unexpected error: path.normalize('${filePath}') !== ${filePath}`
      )
    }
    const fromCache = this.cache.get(filePath)
    if (fromCache) {
      return fromCache
    }
    const packageJsonPath = path.join(filePath, 'package.json')
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
          return this.cached(filePath, ScipSymbol.package(name, version))
        }
      }
    } catch (error) {
      console.error(`error parsing ${packageJsonPath}`, error)
      return this.cached(filePath, ScipSymbol.empty())
    }

    if (filePath === this.projectRoot) {
      return this.cached(filePath, ScipSymbol.empty())
    }

    const dirname = path.dirname(filePath)
    if (dirname === filePath) {
      return this.cached(filePath, ScipSymbol.empty())
    }
    const owner = this.symbol(dirname)
    if (owner) {
      return this.cached(
        filePath,
        ScipSymbol.global(owner, packageDescriptor(path.basename(filePath)))
      )
    }
    return this.cached(filePath, ScipSymbol.empty())
  }

  private cached(filePath: string, sym: ScipSymbol): ScipSymbol {
    this.cache.set(filePath, sym)
    return sym
  }
}
