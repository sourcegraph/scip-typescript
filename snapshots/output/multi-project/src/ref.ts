  import { hello } from './example'
//         ^^^^^ reference multi-project 1.0.0 src/`example.ts`/hello().
  
  hello().a
//^^^^^ reference multi-project 1.0.0 src/`example.ts`/hello().
//        ^ reference multi-project 1.0.0 src/`example.ts`/a0:
  
