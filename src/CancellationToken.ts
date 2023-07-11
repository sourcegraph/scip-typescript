export class CancelationToken {
  #isCancelled = false
  public isCancelled(): boolean {
    return this.#isCancelled
  }
  public cancel(): void {
    this.#isCancelled = true
  }
}
