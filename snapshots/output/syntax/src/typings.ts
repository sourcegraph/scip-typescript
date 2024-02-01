// < definition syntax 1.0.0 src/`typings.ts`/

export function process() {
//              ^^^^^^^ definition syntax 1.0.0 src/`typings.ts`/process().
  return window.process
//       ^^^^^^ reference typescript 5.3.3 lib/`lib.dom.d.ts`/window.
//              ^^^^^^^ reference @types/node 20.10.5 `globals.d.ts`/global/process.
//              ^^^^^^^ reference @types/node 20.10.5 `process.d.ts`/process/global/process.
}

