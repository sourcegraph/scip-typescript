  interface Props {
// definition syntax 1.0.0 src/`destructuring.ts`/
//documentation ```ts\nmodule "destructuring.ts"\n```
//          ^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/Props#
//          documentation ```ts\ninterface Props\n```
    a: number
//  ^ definition syntax 1.0.0 src/`destructuring.ts`/Props#a.
//  documentation ```ts\n(property) a: number\n```
  }
  const props: Props = { a: 42 }
//      ^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/props.
//      documentation ```ts\nvar props: Props\n```
//             ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/Props#
//                       ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
  
  export function objectDestructuring(): number[] {
//                ^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/objectDestructuring().
//                documentation ```ts\nfunction objectDestructuring(): number[]\n```
    const { a: b } = props
//          ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//             ^ definition local 4
//             documentation ```ts\nvar b: number\n```
//                   ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
    return [props].map(({ a }) => a + b)
//          ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
//                 ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                        ^ definition local 10
//                        documentation ```ts\n(parameter) a: number\n```
//                        ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                                ^ reference local 10
//                                    ^ reference local 4
  }
  
  export function arrayDestructuring(): number[] {
//                ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/arrayDestructuring().
//                documentation ```ts\nfunction arrayDestructuring(): number[]\n```
    const [b] = [props]
//         ^ definition local 15
//         documentation ```ts\nvar b: Props\n```
//               ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
    return [[b]].map(([a]) => a.a)
//           ^ reference local 15
//               ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                     ^ definition local 21
//                     documentation ```ts\n(parameter) a: Props\n```
//                            ^ reference local 21
//                              ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
  }
  
  export function nestedDestructuring(): number[] {
//                ^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/nestedDestructuring().
//                documentation ```ts\nfunction nestedDestructuring(): number[]\n```
    const [[b]] = [[props]]
//          ^ definition local 28
//          documentation ```ts\nvar b: Props\n```
//                  ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
    return [[props]].map(([{ a }]) => a + b.a)
//           ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
//                   ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                           ^ definition local 36
//                           documentation ```ts\n(parameter) a: number\n```
//                           ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                                    ^ reference local 36
//                                        ^ reference local 28
//                                          ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
  }
  
  export function forLoopObjectDestructuring(): number {
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/forLoopObjectDestructuring().
//                documentation ```ts\nfunction forLoopObjectDestructuring(): number\n```
    for (const { a } of [props]) {
//               ^ definition local 41
//               documentation ```ts\nvar a: number\n```
//               ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                       ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
      return a
//           ^ reference local 41
    }
    return 1
  }
  
  export function forLoopArrayDestructuring(): number {
//                ^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/forLoopArrayDestructuring().
//                documentation ```ts\nfunction forLoopArrayDestructuring(): number\n```
    for (const [{ a }] of [[props]]) {
//                ^ definition local 48
//                documentation ```ts\nvar a: number\n```
//                ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                          ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/props.
      return a
//           ^ reference local 48
    }
    return 1
  }
  
  export function parameterDestructuring({ a }: Props): number {
//                ^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`destructuring.ts`/parameterDestructuring().
//                documentation ```ts\nfunction parameterDestructuring({ a }: Props): number\n```
//                                         ^ definition local 50
//                                         documentation ```ts\n(parameter) a: number\n```
//                                         ^ reference syntax 1.0.0 src/`destructuring.ts`/Props#a.
//                                              ^^^^^ reference syntax 1.0.0 src/`destructuring.ts`/Props#
    return a
//         ^ reference local 50
  }
  
