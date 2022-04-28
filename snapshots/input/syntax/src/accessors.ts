class C {
  _length: number = 0
  get length(): number {
    return this._length
  }
  set length(value: number) {
    this._length = value
  }

  _capacity: number = 0
  get capacity(): number {
    return this._capacity
  }
}

export class D {
  _length: number = 0
  public get length(): number {
    return this._length
  }
  public set length(value: number) {
    this._length = value
  }

  _capacity: number = 0
  public get capacity(): number {
    return this._capacity
  }
  private set capacity(value: number) {
    this._capacity = value
  }
  public unsafeSetCapacity(value: number): void {
    this.capacity = value
  }
}

function g(_: number): void {}

function f() {
  const c = new C()
  c.length = 10
  g(c.length)
  g(c.capacity)
  g(c.length)

  const d = new D()
  d.length = 0
  g(d.length)
  g(d.capacity)
  g(D.length)
}
