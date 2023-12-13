import { Option } from './reusable-types'

interface Address {
  street: string
  people: Person[]
}
interface Person {
  name: string
  address?: Address
}

export function handleNestedObjectLiterals(): Person {
  return {
    name: 'John',
    address: {
      street: 'Oxford Street',
      people: [
        {
          name: 'Susan',
        },
      ],
    },
  }
}

export function handleNestedTypeVariables(): Option<Person> {
  return {
    value: {
      name: 'John',
      address: {
        street: 'Oxford Street',
        people: [
          {
            name: 'Susan',
          },
        ],
      },
    },
  }
}
