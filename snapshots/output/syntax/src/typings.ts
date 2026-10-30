// language TypeScript
// < definition syntax 1.0.0 src/`typings.ts`/

export function process() {
//              ^^^^^^^ definition syntax 1.0.0 src/`typings.ts`/process().
  return window.process
//       ^^^^^^ reference typescript 6.0.3 lib/`lib.dom.d.ts`/window.
//              ^^^^^^^ reference @types/node 24.19.2 `globals.d.ts`/process.
//              ^^^^^^^ reference @types/node 24.19.2 `process.d.ts`/`"process"`/global/process.
}

