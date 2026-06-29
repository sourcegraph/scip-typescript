import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { listNpmWorkspaces } from './main'

function makeWorkspace(
  workspaces: unknown,
  packages: string[]
): { dir: string; cleanup: () => void } {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'scip-npm-ws-'))
  fs.writeFileSync(
    path.join(dir, 'package.json'),
    JSON.stringify({ name: 'root', private: true, workspaces })
  )
  for (const p of packages) {
    const full = path.join(dir, p)
    fs.mkdirSync(full, { recursive: true })
    fs.writeFileSync(
      path.join(full, 'package.json'),
      JSON.stringify({ name: `@example/${path.basename(p)}` })
    )
  }
  return {
    dir,
    cleanup: () => fs.rmSync(dir, { recursive: true, force: true }),
  }
}

test('npm workspaces: array form', () => {
  const { dir, cleanup } = makeWorkspace(
    ['packages/*'],
    ['packages/a', 'packages/b']
  )
  try {
    const got = listNpmWorkspaces(dir)
      .map(p => path.relative(dir, p))
      .sort()
    assert.equal(got, [path.join('packages', 'a'), path.join('packages', 'b')])
  } finally {
    cleanup()
  }
})

test('npm workspaces: object form { packages: [...] }', () => {
  const { dir, cleanup } = makeWorkspace({ packages: ['packages/*'] }, [
    'packages/a',
    'packages/b',
  ])
  try {
    const got = listNpmWorkspaces(dir)
      .map(p => path.relative(dir, p))
      .sort()
    assert.equal(got, [path.join('packages', 'a'), path.join('packages', 'b')])
  } finally {
    cleanup()
  }
})

test('npm workspaces: object form without packages key returns nothing', () => {
  const { dir, cleanup } = makeWorkspace({ nohmm: ['packages/*'] }, [
    'packages/a',
  ])
  try {
    assert.equal(listNpmWorkspaces(dir), [])
  } finally {
    cleanup()
  }
})

test.run()
