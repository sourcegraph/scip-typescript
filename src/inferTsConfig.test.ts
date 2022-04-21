import { join } from 'path'
import * as process from 'process'

import { test } from 'uvu'

import { allowJsConfig, inferTsConfig, noJsConfig } from './inferTsConfig'

const inputDirectory = join(process.cwd(), 'snapshots', 'inferTsConfig')

function checkDirectory(name: string, expected: string): void {
  test(name, () => {
    const directory = join(inputDirectory, name)
    const obtained = inferTsConfig(directory)
    if (obtained !== expected) {
      throw new Error(`expected ('${expected}') != obtained ('${obtained}')`)
    }
  })
}

checkDirectory('js-project', allowJsConfig)
checkDirectory('ts-project', noJsConfig)
