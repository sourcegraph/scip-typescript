// < definition syntax 1.0.0 src/`destructuring.ts`/

interface Props {
//        ^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/Props#
  a: number
//^ definition syntax 1.0.0 src/`destructuring.ts`/Props#a.
}
const props: Props = { a: 42 }
//    ^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/props.
//           ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/Props#
//                     ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.

export function objectDestructuring(): number[] {
//              ^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/objectDestructuring().
  const { a: b } = props
//        ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//           ^ definition local 2
//                 ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
  return [props].map(({ a }) => a + b)
//        ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
//               ^^^ reference typescript 5.9.3 lib/`lib.es5.d.ts`/Array#map().
//                      ^ definition local 8
//                      ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                              ^ reference local 8
//                                  ^ reference local 2
}

export function arrayDestructuring(): number[] {
//              ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/arrayDestructuring().
  const [b] = [props]
//       ^ definition local 11
//             ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
  return [[b]].map(([a]) => a.a)
//         ^ reference local 11
//             ^^^ reference typescript 5.9.3 lib/`lib.es5.d.ts`/Array#map().
//                   ^ definition local 17
//                          ^ reference local 17
//                            ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
}

export function nestedDestructuring(): number[] {
//              ^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/nestedDestructuring().
  const [[b]] = [[props]]
//        ^ definition local 22
//                ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
  return [[props]].map(([{ a }]) => a + b.a)
//         ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
//                 ^^^ reference typescript 5.9.3 lib/`lib.es5.d.ts`/Array#map().
//                         ^ definition local 30
//                         ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                                  ^ reference local 30
//                                      ^ reference local 22
//                                        ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
}

export function forLoopObjectDestructuring(): number {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/forLoopObjectDestructuring().
  for (const { a } of [props]) {
//             ^ definition local 34
//             ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                     ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
    return a
//         ^ reference local 34
  }
  return 1
}

export function forLoopArrayDestructuring(): number {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/forLoopArrayDestructuring().
  for (const [{ a }] of [[props]]) {
//              ^ definition local 40
//              ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                        ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
    return a
//         ^ reference local 40
  }
  return 1
}

export function parameterDestructuring({ a }: Props): number {
//              ^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/parameterDestructuring().
//                                       ^ definition local 41
//                                       ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                                            ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/Props#
  return a
//       ^ reference local 41
}

