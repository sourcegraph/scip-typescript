import { defineConfig, type Options } from 'tsup'

const sharedConfig: Options = {
  entry: {
    index: 'src/index.ts',
    main: 'src/main.ts',
    scip: 'src/scip.ts',
  },
  bundle: true,
  platform: 'node',
  target: 'node24',
  splitting: false,
  sourcemap: true,
  skipNodeModulesBundle: true,
}

export default defineConfig([
  {
    ...sharedConfig,
    format: ['cjs'],
    outDir: 'dist/cjs',
    clean: true,
  },
  {
    ...sharedConfig,
    format: ['esm'],
    outDir: 'dist/esm',
    dts: true,
    clean: false,
  },
])
