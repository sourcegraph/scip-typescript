  class C {
//      ^ definition syntax 1.0.0 src/`accessors.ts`/C#
//      documentation ```ts\nC\n```
//      documentation 
    _length: number = 0
//  ^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#_length.
//  documentation ```ts\nnumber\n```
//  documentation 
    get length(): number {
//      ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//      documentation ```ts\nnumber\n```
//      documentation 
      return this._length
//                ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_length.
    }
    set length(value: number) {
//      ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//      documentation ```ts\nnumber\n```
//      documentation 
//             ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().(value)
//             documentation ```ts\nnumber\n```
//             documentation 
      this._length = value
//         ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_length.
//                   ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().(value)
    }
  
    _capacity: number = 0
//  ^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#_capacity.
//  documentation ```ts\nnumber\n```
//  documentation 
    get capacity(): number {
//      ^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<get>capacity`().
//      documentation ```ts\nnumber\n```
//      documentation 
      return this._capacity
//                ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_capacity.
    }
  }
  
  export class D {
//             ^ definition syntax 1.0.0 src/`accessors.ts`/D#
//             documentation ```ts\nD\n```
//             documentation 
    _length: number = 0
//  ^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#_length.
//  documentation ```ts\nnumber\n```
//  documentation 
    public get length(): number {
//             ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
//             documentation ```ts\nnumber\n```
//             documentation 
      return this._length
//                ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_length.
    }
    public set length(value: number) {
//             ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
//             documentation ```ts\nnumber\n```
//             documentation 
//                    ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().(value)
//                    documentation ```ts\nnumber\n```
//                    documentation 
      this._length = value
//         ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_length.
//                   ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().(value)
    }
  
    _capacity: number = 0
//  ^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#_capacity.
//  documentation ```ts\nnumber\n```
//  documentation 
    public get capacity(): number {
//             ^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//             documentation ```ts\nnumber\n```
//             documentation 
      return this._capacity
//                ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_capacity.
    }
    private set capacity(value: number) {
//              ^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//              documentation ```ts\nnumber\n```
//              documentation 
//                       ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().(value)
//                       documentation ```ts\nnumber\n```
//                       documentation 
      this._capacity = value
//         ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_capacity.
//                     ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().(value)
    }
    public unsafeSetCapacity(value: number): void {
//         ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().
//         documentation ```ts\n(value: number) => void\n```
//         documentation 
//                           ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().(value)
//                           documentation ```ts\nnumber\n```
//                           documentation 
      this.capacity = value
//         ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//         ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().
//                    ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().(value)
    }
  }
  
  function g(_: number): void {}
//         ^ definition syntax 1.0.0 src/`accessors.ts`/g().
//         documentation ```ts\n(_: number) => void\n```
//         documentation 
//           ^ definition syntax 1.0.0 src/`accessors.ts`/g().(_)
//           documentation ```ts\nnumber\n```
//           documentation 
  
  function f() {
//         ^ definition syntax 1.0.0 src/`accessors.ts`/f().
//         documentation ```ts\n() => void\n```
//         documentation 
    const c = new C()
//        ^ definition local 2
//        documentation ```ts\nC\n```
//        documentation 
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
//        documentation ```ts\nD\n```
//        documentation 
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
  
