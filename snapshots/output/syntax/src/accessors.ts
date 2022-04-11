  class C {
//      ^ reference syntax 1.0.0 src/`accessors.ts`/C#
    _length: number = 0;
//  ^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#_length.
    get length(): number {
//      ^^^^^^ definition local 0
      return this._length;
//                ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_length.
    }
    set length(value: number) {
//      ^^^^^^ definition local 0
//             ^^^^^ definition local 2
      this._length = value;
//         ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_length.
//                   ^^^^^ reference local 2
    }
  
    _capacity: number = 0
//  ^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#_capacity.
    get capacity(): number {
//      ^^^^^^^^ reference local 3
      return this._capacity
//                ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_capacity.
    }
  }
  
  export class D {
//             ^ reference syntax 1.0.0 src/`accessors.ts`/D#
      _length: number = 0;
//    ^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#_length.
      public get length(): number {
//               ^^^^^^ reference local 4
//               ^^^^^^ reference local 5
        return this._length;
//                  ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_length.
      }
      public set length(value: number) {
//               ^^^^^^ reference local 4
//               ^^^^^^ reference local 5
//                      ^^^^^ definition local 6
        this._length = value;
//           ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_length.
//                     ^^^^^ reference local 6
      }
  
      _capacity: number = 0
//    ^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#_capacity.
      public get capacity(): number {
//               ^^^^^^^^ reference local 7
//               ^^^^^^^^ reference local 8
        return this._capacity;
//                  ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_capacity.
      }
      private set capacity(value: number) {
//                ^^^^^^^^ reference local 7
//                ^^^^^^^^ reference local 8
//                         ^^^^^ definition local 9
        this._capacity = value;
//           ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_capacity.
//                       ^^^^^ reference local 9
      }
      public unsafeSetCapacity(value: number): void {
//           ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().
//                             ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().(value)
        this.capacity = value
//           ^^^^^^^^ reference local 7
//           ^^^^^^^^ reference local 8
//                      ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().(value)
      }
  }
  
  function g(_: number): void {}
//         ^ definition syntax 1.0.0 src/`accessors.ts`/g().
//           ^ definition syntax 1.0.0 src/`accessors.ts`/g().(_)
  
  function f() {
//         ^ definition syntax 1.0.0 src/`accessors.ts`/f().
    const c = new C()
//        ^ definition local 12
//                ^ reference syntax 1.0.0 src/`accessors.ts`/C#
    c.length = 10
//  ^ reference local 12
//    ^^^^^^ reference local 0
//    ^^^^^^ reference local 1
    g(c.length)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference local 12
//      ^^^^^^ reference local 0
//      ^^^^^^ reference local 1
    g(c.capacity)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference local 12
//      ^^^^^^^^ reference local 3
    g(c.length)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference local 12
//      ^^^^^^ reference local 0
//      ^^^^^^ reference local 1
  
    const d = new D()
//        ^ definition local 15
//                ^ reference syntax 1.0.0 src/`accessors.ts`/D#
    d.length = 0
//  ^ reference local 15
//    ^^^^^^ reference local 4
//    ^^^^^^ reference local 5
    g(d.length)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference local 15
//      ^^^^^^ reference local 4
//      ^^^^^^ reference local 5
    g(d.capacity)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference local 15
//      ^^^^^^^^ reference local 7
//      ^^^^^^^^ reference local 8
    g(D.length)
//  ^ reference syntax 1.0.0 src/`accessors.ts`/g().
//    ^ reference syntax 1.0.0 src/`accessors.ts`/D#
//      ^^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Function#length.
  }
