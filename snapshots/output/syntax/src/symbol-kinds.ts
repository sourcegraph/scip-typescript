// < definition syntax 1.0.0 src/`symbol-kinds.ts`/
//kind File

// format-options: showKinds
export const constant = 1
//           ^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/constant.
//           kind Constant
export let mutable = 2
//         ^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/mutable.
//         kind Variable
export var legacy = 3
//         ^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/legacy.
//         kind Variable

export type Alias<T> = { value: T }
//          ^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Alias#
//          kind TypeAlias
//                ^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Alias#[T]
//                kind TypeParameter
//                       ^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Alias#typeLiteral0:value.
//                       kind Property
//                              ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Alias#[T]

export interface Contract<T> {
//               ^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Contract#
//               kind Interface
//                        ^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Contract#[T]
//                        kind TypeParameter
  property: T
//^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Contract#property.
//kind Property
//          ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Contract#[T]
  method(value: T): T
//^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Contract#method().
//kind Method
//       ^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Contract#method().(value)
//       kind Parameter
//              ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Contract#[T]
//                  ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Contract#[T]
}

export enum Choice {
//          ^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Choice#
//          kind Enum
  First,
//^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Choice#First.
//kind EnumMember
}

export namespace Space {
//               ^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Space/
//               kind Namespace
  export const nested = 1
//             ^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Space/nested.
//             kind Constant
}

export class Example<T> implements Contract<T> {
//           ^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#
//           kind Class
//           relationship implementation syntax 1.0.0 src/`symbol-kinds.ts`/Contract#
//                   ^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]
//                   kind TypeParameter
//                                 ^^^^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Contract#
//                                          ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]
  static staticProperty = 1
//       ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#staticProperty.
//       kind StaticProperty
  property: T
//^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#property.
//kind Property
//relationship implementation reference syntax 1.0.0 src/`symbol-kinds.ts`/Contract#property.
//          ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]

  constructor(property: T) {
//^^^^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#`<constructor>`().
//kind Constructor
//            ^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#`<constructor>`().(property)
//            kind Parameter
//                      ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]
    this.property = property
//       ^^^^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#property.
//                  ^^^^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#`<constructor>`().(property)
  }

  method(value: T): T {
//^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#method().
//kind Method
//relationship implementation reference syntax 1.0.0 src/`symbol-kinds.ts`/Contract#method().
//       ^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#method().(value)
//       kind Parameter
//              ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]
//                  ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]
    return value
//         ^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#method().(value)
  }

  static staticMethod(value: number): number {
//       ^^^^^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#staticMethod().
//       kind StaticMethod
//                    ^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#staticMethod().(value)
//                    kind Parameter
    return value
//         ^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#staticMethod().(value)
  }

  get accessor(): T {
//    ^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#`<get>accessor`().
//    kind Getter
//                ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]
    return this.property
//              ^^^^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#property.
  }

  set accessor(value: T) {
//    ^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#`<set>accessor`().
//    kind Setter
//             ^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#`<set>accessor`().(value)
//             kind Parameter
//                    ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]
    this.property = value
//       ^^^^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#property.
//                  ^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#`<set>accessor`().(value)
  }

  explicitThis(this: Example<T>, value: T): T {
//^^^^^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#explicitThis().
//kind Method
//             ^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#explicitThis().(this)
//             kind ThisParameter
//                   ^^^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#
//                           ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]
//                               ^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/Example#explicitThis().(value)
//                               kind Parameter
//                                      ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]
//                                          ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#[T]
    return value
//         ^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/Example#explicitThis().(value)
  }
}

export function identity<T>(value: T): T {
//              ^^^^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/identity().
//              kind Function
//                       ^ definition syntax 1.0.0 src/`symbol-kinds.ts`/identity().[T]
//                       kind TypeParameter
//                          ^^^^^ definition syntax 1.0.0 src/`symbol-kinds.ts`/identity().(value)
//                          kind Parameter
//                                 ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/identity().[T]
//                                     ^ reference syntax 1.0.0 src/`symbol-kinds.ts`/identity().[T]
  const local = value
//      ^^^^^ definition local 3
//      kind Constant
//              ^^^^^ reference syntax 1.0.0 src/`symbol-kinds.ts`/identity().(value)
  let mutableLocal = local
//    ^^^^^^^^^^^^ definition local 6
//    kind Variable
//                   ^^^^^ reference local 3
  return mutableLocal
//       ^^^^^^^^^^^^ reference local 6
}

