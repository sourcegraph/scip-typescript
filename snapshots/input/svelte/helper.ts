export interface User {
  name: string
}

export function format(name: string): string {
  return name.toUpperCase()
}
