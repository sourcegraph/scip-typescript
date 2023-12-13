import { Configuration } from './reusable-types'

function MyDecorator(value: Configuration) {
  return function (target: Function) {
    console.log(`MyDecorator is called with value: ${value}`)
  }
}

@MyDecorator({ property: 42, property2: '42' })
class MyClass {
  //...
}
