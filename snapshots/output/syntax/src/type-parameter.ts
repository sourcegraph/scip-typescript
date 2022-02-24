  export function typeParameter<A, B>(parameter: A, parameter2: B): [A, B] {
//                ^^^^^^^^^^^^^ definition example 1.0.0 src/`type-parameter.ts`/typeParameter().
//                              ^ definition example 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                 ^ definition example 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
//                                    ^^^^^^^^^ definition example 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter)
//                                               ^ reference example 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                                  ^^^^^^^^^^ definition example 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter2)
//                                                              ^ reference example 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
//                                                                   ^ reference example 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                                                      ^ reference example 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
    return [parameter, parameter2]
//          ^^^^^^^^^ reference example 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter)
//                     ^^^^^^^^^^ reference example 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter2)
  }
  
