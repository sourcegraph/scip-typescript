  class C {
//      ^ definition syntax 1.0.0 src/`accessors.ts`/C#
//      documentation ```ts\nclass C\n```
    _length: number = 0
//  ^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#_length.
//  documentation ```ts\n(property) _length: number\n```
    get length(): number {
//      ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//      documentation ```ts\nget length: number\n```
      return this._length
//                ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_length.
    }
    set length(value: number) {
//      ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//      documentation ```ts\nget length: number\n```
//             ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().(value)
//             documentation ```ts\n(parameter) value: number\n```
      this._length = value
//         ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_length.
//                   ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().(value)
    }
  
    _capacity: number = 0
//  ^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#_capacity.
//  documentation ```ts\n(property) _capacity: number\n```
    get capacity(): number {
//      ^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<get>capacity`().
//      documentation ```ts\nget capacity: number\n```
      return this._capacity
//                ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_capacity.
    }
  }
  
  export class D {
//             ^ definition syntax 1.0.0 src/`accessors.ts`/D#
//             documentation ```ts\nclass D\n```
    _length: number = 0
//  ^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#_length.
//  documentation ```ts\n(property) _length: number\n```
    public get length(): number {
//             ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
//             documentation ```ts\nget length: number\n```
      return this._length
//                ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_length.
    }
    public set length(value: number) {
//             ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
//             documentation ```ts\nget length: number\n```
//                    ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().(value)
//                    documentation ```ts\n(parameter) value: number\n```
      this._length = value
//         ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_length.
//                   ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().(value)
    }
  
    _capacity: number = 0
//  ^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#_capacity.
//  documentation ```ts\n(property) _capacity: number\n```
    public get capacity(): number {
//             ^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//             documentation ```ts\nget capacity: number\n```
      return this._capacity
//                ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_capacity.
    }
    private set capacity(value: number) {
//              ^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//              documentation ```ts\nget capacity: number\n```
//                       ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().(value)
//                       documentation ```ts\n(parameter) value: number\n```
      this._capacity = value
//         ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_capacity.
//                     ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().(value)
    }
    public unsafeSetCapacity(value: number): void {
//         ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().
//         documentation ```ts\n(method) unsafeSetCapacity(value: number): void\n```
//                           ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().(value)
//                           documentation ```ts\n(parameter) value: number\n```
      this.capacity = value
//         ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//         ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().
//                    ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().(value)
    }
  }
  
  function g(_: number): void {}
//         ^ definition syntax 1.0.0 src/`accessors.ts`/g().
//         documentation ```ts\nfunction g(_: number): void\n```
//           ^ definition syntax 1.0.0 src/`accessors.ts`/g().(_)
//           documentation ```ts\n(parameter) _: number\n```
  
  function f() {
//         ^ definition syntax 1.0.0 src/`accessors.ts`/f().
//         documentation ```ts\nfunction f(): void\n```
    const c = new C()
//        ^ definition local 2
//        documentation ```ts\nvar c: C\n```
//                ^ reference syntax 1.0.0 src/`accessors.ts`/C#
    c.length = 10
//  ^ reference local 2
//    ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//    ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().
    g(c.length)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference local 2
//      ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//      ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().
    g(c.capacity)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference local 2
//      ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<get>capacity`().
    g(c.length)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference local 2
//      ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//      ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().
  
    const d = new D()
//        ^ definition local 5
//        documentation ```ts\nvar d: D\n```
//                ^ reference syntax 1.0.0 src/`accessors.ts`/D#
    d.length = 0
//  ^ reference local 5
//    ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
//    ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().
    g(d.length)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference local 5
//      ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
//      ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().
    g(d.capacity)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference local 5
//      ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//      ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().
    g(D.length)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference syntax 1.0.0 src/`accessors.ts`/D#
//      ^^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Function#length.
  }
  
