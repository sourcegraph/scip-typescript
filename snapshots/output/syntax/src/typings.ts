// < definition syntax 1.0.0 src/`typings.ts`/

export function process() {
//              ^^^^^^^ definition syntax 1.0.0 src/`typings.ts`/process().
  return window.process
//       ^^^^^^ reference typescript 5.7.3 lib/`lib.dom.d.ts`/window.
//              ^^^^^^^ reference @types/node 20.16.10 `globals.d.ts`/global/process.
//              ^^^^^^^ reference @types/node 20.16.10 `process.d.ts`/`"process"`/global/process.
}

