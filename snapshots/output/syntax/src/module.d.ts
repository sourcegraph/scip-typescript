  declare module 'a:b' {
// definition syntax 1.0.0 src/`module.d.ts`/
//documentation ```ts\nmodule "module.d.ts"\n```
//               ^^^^^ definition syntax 1.0.0 src/`module.d.ts`/`'a:b'`/
//               documentation ```ts\n'a:b': typeof import("a:b")\n```
    function hello(): string
//           ^^^^^ definition syntax 1.0.0 src/`module.d.ts`/`'a:b'`/hello().
//           documentation ```ts\nfunction hello(): string\n```
  }
  
