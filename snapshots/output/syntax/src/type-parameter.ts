// < definition scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/

export function typeParameter<A, B>(parameter: A, parameter2: B): [A, B] {
//              ^^^^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().
//                            ^ definition scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                               ^ definition scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
//                                  ^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter)
//                                             ^ reference scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                                ^^^^^^^^^^ definition scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter2)
//                                                            ^ reference scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
//                                                                 ^ reference scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                                                    ^ reference scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
  return [parameter, parameter2]
//        ^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter)
//                   ^^^^^^^^^^ reference scip-typescript npm syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter2)
}

