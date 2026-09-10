// < definition syntax 1.0.0 src/`object-literals-nested.ts`/

import { Option } from './reusable-types'
//       ^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#
//                     ^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/

interface Address {
//        ^^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Address#
  street: string
//^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Address#street.
  people: Person[]
//^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Address#people.
//        ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#
}
interface Person {
//        ^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Person#
  name: string
//^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Person#name.
  address?: Address
//^^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/Person#address.
//          ^^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Address#
}

export function handleNestedObjectLiterals(): Person {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/handleNestedObjectLiterals().
//                                            ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#
  return {
    name: 'John',
//  ^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#name.
    address: {
//  ^^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#address.
      street: 'Oxford Street',
//    ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Address#street.
      people: [
//    ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Address#people.
        {
          name: 'Susan',
//        ^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#name.
        },
      ],
    },
  }
}

export function handleNestedTypeVariables(): Option<Person> {
//              ^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-nested.ts`/handleNestedTypeVariables().
//                                           ^^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#
//                                                  ^^^^^^ reference syntax 1.0.0 src/`object-literals-nested.ts`/Person#
  return {
    value: {
//  ^^^^^ reference syntax 1.0.0 src/`reusable-types.ts`/Option#value.
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
    },
  }
}

