// Minimal declarations of the Jest globals that the tests use, so that this
// project does not need @types/jest. Not a test file.
declare function describe(name: string, body: () => void): void
declare function test(name: string, body: () => void): void
declare function it(name: string, body: () => void): void
declare function expect<T>(actual: T): { toBe(expected: T): void }
