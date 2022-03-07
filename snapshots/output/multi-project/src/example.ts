  export function hello() {
//                ^^^^^ definition multi-project 1.0.0 src/`example.ts`/hello().
    const a = 'a'
//        ^ definition local 2
    return { a }
//           ^ definition multi-project 1.0.0 src/`example.ts`/a0:
//           ^ reference local 2
  }
  
