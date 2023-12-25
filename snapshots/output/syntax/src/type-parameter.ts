// < definition syntax 1.0.0 src/`type-parameter.ts`/

export function typeParameter<A, B>(parameter: A, parameter2: B): [A, B] {
//              ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().
//                            ^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                               ^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
//                                  ^^^^^^^^^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter)
//                                             ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                                ^^^^^^^^^^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter2)
//                                                            ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
//                                                                 ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                                                    ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
  return [parameter, parameter2]
//        ^^^^^^^^^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter)
//                   ^^^^^^^^^^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter2)
}

