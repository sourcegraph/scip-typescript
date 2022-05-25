  export interface Overloader {
//                 ^^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#
//                 documentation ```ts\ninterface Overloader\n```
    onLiteral(param: 'a'): void
//  ^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//  documentation ```ts\n(method) onLiteral{ (param: "a"): void; (param: "b"): void; }\n```
//            ^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
//            documentation ```ts\n(parameter) param: "b"\n```
    onLiteral(param: 'b'): void
//  ^^^^^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().
//  documentation ```ts\n(method) onLiteral{ (param: "a"): void; (param: "b"): void; }\n```
//            ^^^^^ definition syntax 1.0.0 src/`overload.d.ts`/Overloader#onLiteral().(param)
//            documentation ```ts\n(parameter) param: "b"\n```
  }
  
