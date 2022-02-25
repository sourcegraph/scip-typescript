export interface Interface {
  property: string
  methodSignature(param: string): string
  methodSignature2: (param: string) => string
}

export function newInterface(): Interface {
  return {
    property: 'a',
    methodSignature(param: string): string {
      return param
    },
    methodSignature2: (param: string): string => {
      return param
    },
  }
}
