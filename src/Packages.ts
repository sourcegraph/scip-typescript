import * as fs from 'fs'
import { LsifSymbol } from './LsifSymbol'
import path from 'path'
import { Descriptor } from './Descriptor'

export class Packages {
  constructor(public readonly projectRoot: string) {}
  private cache: Map<string, LsifSymbol> = new Map()
  public symbol(filePath: string): LsifSymbol {
    if (path.normalize(filePath) !== filePath) {
      throw new Error('BOOM FIX THIS')
    }
    // TODO: handle end case.
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
        const packageJson = JSON.parse(packageJsonText)
        const name = packageJson.name
        const version = packageJson.version
        if (typeof name === 'string' && typeof version === 'string') {
          return this.cached(filePath, LsifSymbol.package(name, version))
        }
      }
    } catch (error) {
      console.error(`error parsing ${packageJsonPath}`, error)
      return this.cached(filePath, LsifSymbol.empty())
    }

    if (filePath === this.projectRoot) {
      return this.cached(filePath, LsifSymbol.empty())
    }

    const dirname = path.dirname(filePath)
    if (dirname === filePath) {
      return this.cached(filePath, LsifSymbol.empty())
    }
    const owner = this.symbol(dirname)
    if (owner) {
      return this.cached(
        filePath,
        LsifSymbol.global(owner, Descriptor.package(path.basename(filePath)))
      )
    }
    return this.cached(filePath, LsifSymbol.empty())
  }

  private cached(filePath: string, sym: LsifSymbol): LsifSymbol {
    this.cache.set(filePath, sym)
    return sym
  }
}
