// < definition syntax 1.0.0 src/`typings.ts`/

export function process() {
//              ^^^^^^^ definition syntax 1.0.0 src/`typings.ts`/process().
  return window.process
//       ^^^^^^ reference typescript 6.0.3 lib/`lib.dom.d.ts`/window.
//              ^^^^^^^ reference @types/node 24.13.3 `globals.d.ts`/process.
//              ^^^^^^^ reference @types/node 24.13.3 `process.d.ts`/`"process"`/global/process.
}

