import * as ts from 'typescript'

declare namespace a {
  function hello(): ts.StringLiteral
  interface Interface {
    hello: string
  }
  var i: Interface
}
