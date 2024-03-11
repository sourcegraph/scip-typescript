// < definition syntax 1.0.0 src/`accessors.ts`/

class C {
//    ^ definition syntax 1.0.0 src/`accessors.ts`/C#
  _length: number = 0
//^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#_length.
  get length(): number {
//    ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
    return this._length
//              ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_length.
  }
  set length(value: number) {
//    ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().
//           ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().(value)
    this._length = value
//       ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_length.
//                 ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().(value)
  }

  _capacity: number = 0
//^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#_capacity.
  get capacity(): number {
//    ^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/C#`<get>capacity`().
    return this._capacity
//              ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#_capacity.
  }
}

export class D {
//           ^ definition syntax 1.0.0 src/`accessors.ts`/D#
  _length: number = 0
//^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#_length.
  public get length(): number {
//           ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
    return this._length
//              ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_length.
  }
  public set length(value: number) {
//           ^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().
//                  ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().(value)
    this._length = value
//       ^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_length.
//                 ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().(value)
  }

  _capacity: number = 0
//^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#_capacity.
  public get capacity(): number {
//           ^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
    return this._capacity
//              ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_capacity.
  }
  private set capacity(value: number) {
//            ^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().
//                     ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().(value)
    this._capacity = value
//       ^^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#_capacity.
//                   ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().(value)
  }
  public unsafeSetCapacity(value: number): void {
//       ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().
//                         ^^^^^ definition syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().(value)
    this.capacity = value
//       ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//       ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().
//                  ^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().(value)
  }
}

function g(_: number): void {}
//       ^ definition syntax 1.0.0 src/`accessors.ts`/g().
//         ^ definition syntax 1.0.0 src/`accessors.ts`/g().(_)

function f() {
//       ^ definition syntax 1.0.0 src/`accessors.ts`/f().
  const c = new C()
//      ^ definition local 2
//              ^ reference syntax 1.0.0 src/`accessors.ts`/C#
  c.length = 10
//^ reference local 2
//  ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//  ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().
  g(c.length)
//^ reference syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference local 2
//    ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//    ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().
  g(c.capacity)
//^ reference syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference local 2
//    ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<get>capacity`().
  g(c.length)
//^ reference syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference local 2
//    ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//    ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().

  const d = new D()
//      ^ definition local 5
//              ^ reference syntax 1.0.0 src/`accessors.ts`/D#
  d.length = 0
//^ reference local 5
//  ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
//  ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().
  g(d.length)
//^ reference syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference local 5
//    ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
//    ^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().
  g(d.capacity)
//^ reference syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference local 5
//    ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//    ^^^^^^^^ reference syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().
  g(D.length)
//^ reference syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference syntax 1.0.0 src/`accessors.ts`/D#
//    ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/length0:
}

