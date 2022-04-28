  export function typeParameter<A, B>(parameter: A, parameter2: B): [A, B] {
//                ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().
//                documentation ```ts\n<A, B>(parameter: A, parameter2: B) => [A, B]\n```
//                documentation 
//                              ^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                              documentation ```ts\nA\n```
//                              documentation 
//                                 ^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
//                                 documentation ```ts\nB\n```
//                                 documentation 
//                                    ^^^^^^^^^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter)
//                                    documentation ```ts\nA\n```
//                                    documentation 
//                                               ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                                  ^^^^^^^^^^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter2)
//                                                  documentation ```ts\nB\n```
//                                                  documentation 
//                                                              ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
//                                                                   ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                                                      ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
    return [parameter, parameter2]
//          ^^^^^^^^^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter)
//                     ^^^^^^^^^^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter2)
  }
  
