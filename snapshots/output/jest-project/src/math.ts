// language TypeScript
// < definition jest-project 1.0.0 src/`math.ts`/

export function add(a: number, b: number): number {
//              ^^^ definition jest-project 1.0.0 src/`math.ts`/add().
//                  ^ definition jest-project 1.0.0 src/`math.ts`/add().(a)
//                             ^ definition jest-project 1.0.0 src/`math.ts`/add().(b)
  return a + b
//       ^ reference jest-project 1.0.0 src/`math.ts`/add().(a)
//           ^ reference jest-project 1.0.0 src/`math.ts`/add().(b)
}

export class Calculator {
//           ^^^^^^^^^^ definition jest-project 1.0.0 src/`math.ts`/Calculator#
  public total = 0
//       ^^^^^ definition jest-project 1.0.0 src/`math.ts`/Calculator#total.
  public plus(value: number): Calculator {
//       ^^^^ definition jest-project 1.0.0 src/`math.ts`/Calculator#plus().
//            ^^^^^ definition jest-project 1.0.0 src/`math.ts`/Calculator#plus().(value)
//                            ^^^^^^^^^^ reference jest-project 1.0.0 src/`math.ts`/Calculator#
    this.total = add(this.total, value)
//       ^^^^^ reference jest-project 1.0.0 src/`math.ts`/Calculator#total.
//               ^^^ reference jest-project 1.0.0 src/`math.ts`/add().
//                        ^^^^^ reference jest-project 1.0.0 src/`math.ts`/Calculator#total.
//                               ^^^^^ reference jest-project 1.0.0 src/`math.ts`/Calculator#plus().(value)
    return this
  }
}

