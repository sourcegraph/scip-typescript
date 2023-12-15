// < definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/

interface Props {
//        ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#
  a: number
//^ definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#a.
}
const props: Props = { a: 42 }
//    ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/props.
//           ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#
//                     ^ definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/a0:
//                     relationship implementation reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#a.

export function objectDestructuring(): number[] {
//              ^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/objectDestructuring().
  const { a: b } = props
//        ^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#a.
//           ^ definition local 4
//                 ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/props.
  return [props].map(({ a }) => a + b)
//        ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/props.
//               ^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Array#map().
//                      ^ definition local 10
//                      ^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                              ^ reference local 10
//                                  ^ reference local 4
}

export function arrayDestructuring(): number[] {
//              ^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/arrayDestructuring().
  const [b] = [props]
//       ^ definition local 15
//             ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/props.
  return [[b]].map(([a]) => a.a)
//         ^ reference local 15
//             ^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Array#map().
//                   ^ definition local 21
//                          ^ reference local 21
//                            ^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#a.
}

export function nestedDestructuring(): number[] {
//              ^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/nestedDestructuring().
  const [[b]] = [[props]]
//        ^ definition local 28
//                ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/props.
  return [[props]].map(([{ a }]) => a + b.a)
//         ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/props.
//                 ^^^ reference scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Array#map().
//                         ^ definition local 36
//                         ^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                                  ^ reference local 36
//                                      ^ reference local 28
//                                        ^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#a.
}

export function forLoopObjectDestructuring(): number {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/forLoopObjectDestructuring().
  for (const { a } of [props]) {
//             ^ definition local 41
//             ^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                     ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/props.
    return a
//         ^ reference local 41
  }
  return 1
}

export function forLoopArrayDestructuring(): number {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/forLoopArrayDestructuring().
  for (const [{ a }] of [[props]]) {
//              ^ definition local 48
//              ^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                        ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/props.
    return a
//         ^ reference local 48
  }
  return 1
}

export function parameterDestructuring({ a }: Props): number {
//              ^^^^^^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/parameterDestructuring().
//                                       ^ definition local 50
//                                       ^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                                            ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`destructuring.ts`/Props#
  return a
//       ^ reference local 50
}

