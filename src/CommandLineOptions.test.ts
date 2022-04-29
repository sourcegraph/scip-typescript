import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { commanderCommand, MultiProjectOptions } from './CommandLineOptions'

function checkIndexParser(
  args: string[],
  expectedOptions: Partial<MultiProjectOptions>,
  expectedProjects?: string[]
): void {
  test(args.join(' '), () => {
    let isAssertionTriggered = false
    const actualArguments = ['node', 'lsif-typescript.js', 'index', ...args]
    commanderCommand((projects, options) => {
      assert.equal(options, { ...options, ...expectedOptions })
      if (expectedProjects) {
        assert.equal(projects, expectedProjects)
      }
      isAssertionTriggered = true
    }).parse(actualArguments)
    assert.ok(isAssertionTriggered)
  })
}

// defaults
checkIndexParser([], {
  progressBar: true,
  cwd: process.cwd(),
  inferTsconfig: false,
  output: 'dump.lsif-typed',
  yarnWorkspaces: false,
})

checkIndexParser(['--yarn-workspaces'], { yarnWorkspaces: true })
checkIndexParser(['--infer-tsconfig'], { inferTsconfig: true })
checkIndexParser(['--no-progress-bar'], { progressBar: false })
