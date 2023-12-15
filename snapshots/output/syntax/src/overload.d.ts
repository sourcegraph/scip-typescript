// < definition scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/

export interface Overloader {
//               ^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#
  onLiteral(param: 'a'): void
//^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//          ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
  onLiteral(param: 'b'): void
//^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//          ^^^^^ definition scip-typescript npm syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
}

