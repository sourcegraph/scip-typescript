  import { Option } from './reusable-types'
// definition syntax 1.0.0 src/`object-literals-nested.ts`/
//documentation ```ts\nmodule "object-literals-nested.ts"\n```
//         ^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#
//                       ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/
  
  interface Address {
//          ^^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Address#
//          documentation ```ts\ninterface Address\n```
    street: string
//  ^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Address#street.
//  documentation ```ts\n(property) street: string\n```
    people: Person[]
//  ^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Address#people.
//  documentation ```ts\n(property) people: Person[]\n```
//          ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#
  }
  interface Person {
//          ^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Person#
//          documentation ```ts\ninterface Person\n```
    name: string
//  ^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Person#name.
//  documentation ```ts\n(property) name: string\n```
    address?: Address
//  ^^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Person#address.
//  documentation ```ts\n(property) address: Address\n```
//            ^^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Address#
  }
  
  export function handleNestedObjectLiterals(): Person {
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/handleNestedObjectLiterals().
//                documentation ```ts\nfunction handleNestedObjectLiterals(): Person\n```
//                                              ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#
    return {
      name: 'John',
//    ^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/name0:
//    documentation ```ts\n(property) name: string\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`object-literals-nested.ts`/Person#name.
      address: {
//    ^^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/address0:
//    documentation ```ts\n(property) address: { street: string; people: { name: string; }[]; }\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`object-literals-nested.ts`/Person#address.
        street: 'Oxford Street',
//      ^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/street0:
//      documentation ```ts\n(property) street: string\n```
        people: [
//      ^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/people0:
//      documentation ```ts\n(property) people: { name: string; }[]\n```
          {
            name: 'Susan',
//          ^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/name1:
//          documentation ```ts\n(property) name: string\n```
          },
        ],
      },
    }
  }
  
  export function handleNestedTypeVariables(): Option<Person> {
//                ^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/handleNestedTypeVariables().
//                documentation ```ts\nfunction handleNestedTypeVariables(): Option<Person>\n```
//                                             ^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#
//                                                    ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#
    return {
      value: {
//    ^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/value0:
//    documentation ```ts\n(property) value: { name: string; address: { street: string; people: { name: string; }[]; }; }\n```
//    relationship implementation reference scip-typescript npm syntax 1.0.0 src/`reusable-types.ts`/Option#value.
        name: 'John',
//      ^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/name2:
//      documentation ```ts\n(property) name: string\n```
        address: {
//      ^^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/address1:
//      documentation ```ts\n(property) address: { street: string; people: { name: string; }[]; }\n```
          street: 'Oxford Street',
//        ^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/street1:
//        documentation ```ts\n(property) street: string\n```
          people: [
//        ^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/people1:
//        documentation ```ts\n(property) people: { name: string; }[]\n```
            {
              name: 'Susan',
//            ^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/name3:
//            documentation ```ts\n(property) name: string\n```
            },
          ],
        },
      },
    }
  }
  
