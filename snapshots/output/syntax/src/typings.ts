  export function process() {
// definition syntax 1.0.0 src/`typings.ts`/
//documentation ```ts\nmodule "typings.ts"\n```
//                ^^^^^^^ definition syntax 1.0.0 src/`typings.ts`/process().
//                documentation ```ts\nfunction process(): Process\n```
    return window.process
//         ^^^^^^ reference typescript 4.8.4 lib/`lib.dom.d.ts`/window.
//                ^^^^^^^ reference @types/node 17.0.14 `globals.d.ts`/process.
//                ^^^^^^^ reference @types/node 17.0.14 `process.d.ts`/`'process'`/global/process.
  }
  
