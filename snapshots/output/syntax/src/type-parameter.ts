  export function typeParameter<A, B>(parameter: A, parameter2: B): [A, B] {
//                ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().
//                documentation ```ts\nfunction typeParameter<A, B>(parameter: A, parameter2: B): [A, B]\n```
//                              ^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                              documentation ```ts\nA: A\n```
//                                 ^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
//                                 documentation ```ts\nB: B\n```
//                                    ^^^^^^^^^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter)
//                                    documentation ```ts\n(parameter) parameter: A\n```
//                                               ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                                  ^^^^^^^^^^ definition syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter2)
//                                                  documentation ```ts\n(parameter) parameter2: B\n```
//                                                              ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
//                                                                   ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[A]
//                                                                      ^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().[B]
    return [parameter, parameter2]
//          ^^^^^^^^^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter)
//                     ^^^^^^^^^^ reference syntax 1.0.0 src/`type-parameter.ts`/typeParameter().(parameter2)
  }
  
