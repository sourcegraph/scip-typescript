// < definition syntax 1.0.0 src/`typings.ts`/

export function process() {
//              ^^^^^^^ definition syntax 1.0.0 src/`typings.ts`/process().
  return window.process
//       ^^^^^^ reference typescript 6.0.3 lib/`lib.dom.d.ts`/window.
}

