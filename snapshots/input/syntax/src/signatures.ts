// format-options: showSignatures

export type Requests = {
  'workspace/edit': [WorkspaceEditParams, boolean]
  'chat/submitMessage': [WorkspaceEditParams, boolean]
}

export type Notifications = {
  'workspace/edit': [WorkspaceEditParams]
}

export type Intersection = { uri: string } & { size: number }
export type Union = { uri: string } | { size: number }
export type Builtin = Pick<WorkspaceEditParams, 'changes'>
export type Builtin2 = Partial<WorkspaceEditParams>
export interface WorkspaceEditParams {
  changes: { uri: string }[]
}

export interface OptionalProperty {
  optional1?: string
  optional2?: number | null
  optional3?: number | undefined
  optional4?: undefined
}

export interface ExampleSuperInterface<T> {
  a: T
  b: string
}
export interface ExampleInterface<T> extends ExampleSuperInterface<T> {
  c: number
}
export class ExampleSuperClass<T> {
  constructor(
    public a: T,
    public b: string
  ) {}
}

export class ExampleClass<T>
  extends ExampleSuperClass<T>
  implements ExampleSuperInterface<T>, ExampleInterface<T>
{
  public d: Record<string, any>

  #e = true

  constructor(
    public a: T,
    public b: string,
    public c: number,
    d: Record<string, any>
  ) {
    super(a, b)
    this.d = d
  }
  public getC(): number {
    return this.c
  }

  get e(): boolean {
    return this.#e
  }

  set setB(b: string) {
    this.#e = true
    this.b = b
  }
}

export function basicFunction<T>(a: T, b: number): string {
  return `${a}${b}`
}
export const constant = 42
export const variable: <T>(a: T, b: number) => string = (a, b) => `${a}${b}`

export interface User {
  name: string
  age: number
  customHeaders: Record<string, string>
}

export interface ChatHistory {
  chatID: User
  [a: number]: User
  [_: string]: User
}

export class ModelProvider {
  default = true
}

export enum NumericLiteralEnum {
  MinusOne = -1,
  Expression = 1 + 23 - 2,
  One = 1,
  TwoThousand = 2_000,
}

export const doubleConstant = 3.14

export enum StringLiteralEnum {
  Saturday = 'saturday',
  Sunday = 'sunday',
}
