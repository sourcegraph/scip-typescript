// < definition syntax 1.0.0 src/`overload.d.ts`/

export interface Overloader {
//               ^^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#
  onLiteral(param: 'a'): void
//^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//          ^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
  onLiteral(param: 'b'): void
//^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//          ^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
}

