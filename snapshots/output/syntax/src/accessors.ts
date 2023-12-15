// < definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/

class C {
//    ^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#
  _length: number = 0
//^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#_length.
  get length(): number {
//    ^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
    return this._length
//              ^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#_length.
  }
  set length(value: number) {
//    ^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().
//           ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().(value)
    this._length = value
//       ^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#_length.
//                 ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().(value)
  }

  _capacity: number = 0
//^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#_capacity.
  get capacity(): number {
//    ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<get>capacity`().
    return this._capacity
//              ^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#_capacity.
  }
}

export class D {
//           ^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#
  _length: number = 0
//^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#_length.
  public get length(): number {
//           ^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
    return this._length
//              ^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#_length.
  }
  public set length(value: number) {
//           ^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().
//                  ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().(value)
    this._length = value
//       ^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#_length.
//                 ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().(value)
  }

  _capacity: number = 0
//^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#_capacity.
  public get capacity(): number {
//           ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
    return this._capacity
//              ^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#_capacity.
  }
  private set capacity(value: number) {
//            ^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().
//                     ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().(value)
    this._capacity = value
//       ^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#_capacity.
//                   ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().(value)
  }
  public unsafeSetCapacity(value: number): void {
//       ^^^^^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().
//                         ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().(value)
    this.capacity = value
//       ^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//       ^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().
//                  ^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#unsafeSetCapacity().(value)
  }
}

function g(_: number): void {}
//       ^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/g().
//         ^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/g().(_)

function f() {
//       ^ definition scip-typescript npm syntax 1.0.0 src/`accessors.ts`/f().
  const c = new C()
//      ^ definition local 2
//              ^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#
  c.length = 10
//^ reference local 2
//  ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//  ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().
  g(c.length)
//^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference local 2
//    ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//    ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().
  g(c.capacity)
//^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference local 2
//    ^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<get>capacity`().
  g(c.length)
//^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference local 2
//    ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<get>length`().
//    ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/C#`<set>length`().

  const d = new D()
//      ^ definition local 5
//              ^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#
  d.length = 0
//^ reference local 5
//  ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
//  ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().
  g(d.length)
//^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference local 5
//    ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<get>length`().
//    ^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<set>length`().
  g(d.capacity)
//^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference local 5
//    ^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<get>capacity`().
//    ^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#`<set>capacity`().
  g(D.length)
//^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/g().
//  ^ reference scip-typescript npm syntax 1.0.0 src/`accessors.ts`/D#
//    ^^^^^^ reference scip-typescript npm typescript 4.8.4 lib/`lib.es5.d.ts`/Function#length.
}

