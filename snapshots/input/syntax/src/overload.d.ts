export interface Overloader {
  onLiteral(param: 'a'): void
  onLiteral(param: 'b'): void
}
