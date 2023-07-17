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
//    ^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#name.
      address: {
//    ^^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#address.
        street: 'Oxford Street',
//      ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Address#street.
        people: [
//      ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Address#people.
          {
            name: 'Susan',
//          ^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#name.
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
//    ^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#value.
        name: 'John',
//      ^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#name.
        address: {
//      ^^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#address.
          street: 'Oxford Street',
//        ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Address#street.
          people: [
//        ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Address#people.
            {
              name: 'Susan',
//            ^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#name.
            },
          ],
        },
      },
    }
  }
  
