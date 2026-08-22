import 'google-protobuf'

declare module 'google-protobuf' {
  interface BinaryReader {
    readPackableInt32Into(values: number[]): void
    readPackableEnumInto(values: number[]): void
  }
}
