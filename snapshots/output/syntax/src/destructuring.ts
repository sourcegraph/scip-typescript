// < definition syntax 1.0.0 src/`destructuring.ts`/

interface Props {
//        ^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/Props#
  a: number
//^ definition syntax 1.0.0 src/`destructuring.ts`/a0:
}
const props: Props = { a: 42 }
//    ^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/props.
//           ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/Props#
//                     ^ definition syntax 1.0.0 src/`destructuring.ts`/a1:
//                     relationship implementation reference syntax 1.0.0 src/`destructuring.ts`/a0:

export function objectDestructuring(): number[] {
//              ^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/objectDestructuring().
  const { a: b } = props
//        ^ reference syntax 1.0.0 src/`destructuring.ts`/a0:
//           ^ definition local 4
//                 ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
  return [props].map(({ a }) => a + b)
//        ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
//               ^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Array#map().
//                      ^ definition local 10
//                      ^ reference syntax 1.0.0 src/`destructuring.ts`/a0:
//                              ^ reference local 10
//                                  ^ reference local 4
}

export function arrayDestructuring(): number[] {
//              ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/arrayDestructuring().
  const [b] = [props]
//       ^ definition local 15
//             ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
  return [[b]].map(([a]) => a.a)
//         ^ reference local 15
//             ^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Array#map().
//                   ^ definition local 21
//                          ^ reference local 21
//                            ^ reference syntax 1.0.0 src/`destructuring.ts`/a0:
}

export function nestedDestructuring(): number[] {
//              ^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/nestedDestructuring().
  const [[b]] = [[props]]
//        ^ definition local 28
//                ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
  return [[props]].map(([{ a }]) => a + b.a)
//         ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
//                 ^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Array#map().
//                         ^ definition local 36
//                         ^ reference syntax 1.0.0 src/`destructuring.ts`/a0:
//                                  ^ reference local 36
//                                      ^ reference local 28
//                                        ^ reference syntax 1.0.0 src/`destructuring.ts`/a0:
}

export function forLoopObjectDestructuring(): number {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/forLoopObjectDestructuring().
  for (const { a } of [props]) {
//             ^ definition local 41
//             ^ reference syntax 1.0.0 src/`destructuring.ts`/a0:
//                     ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
    return a
//         ^ reference local 41
  }
  return 1
}

export function forLoopArrayDestructuring(): number {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/forLoopArrayDestructuring().
  for (const [{ a }] of [[props]]) {
//              ^ definition local 48
//              ^ reference syntax 1.0.0 src/`destructuring.ts`/a0:
//                        ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
    return a
//         ^ reference local 48
  }
  return 1
}

export function parameterDestructuring({ a }: Props): number {
//              ^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/parameterDestructuring().
//                                       ^ definition local 50
//                                       ^ reference syntax 1.0.0 src/`destructuring.ts`/a0:
//                                            ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/Props#
  return a
//       ^ reference local 50
}

