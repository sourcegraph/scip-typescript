import { Class } from './class'
import { Enum } from './enum'
import { newFunction } from './function'
import { newInterface as renamedInterface } from './interface'

export function useEverything(): string {
  return (
    new Class('a').classProperty +
    renamedInterface().methodSignature('a') +
    Enum[Enum.A] +
    newFunction()
  )
}
