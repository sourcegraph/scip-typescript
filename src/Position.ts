export class Position {
  /**
   * @param line 0-based line number
   * @param character  0-based character (or column) number
   */
  constructor(
    public readonly line: number,
    public readonly character: number
  ) {}
  public compare(other: Position): number {
    if (this.line !== other.line) {
      return this.line - other.line
    }
    return this.character - other.character
  }
}
