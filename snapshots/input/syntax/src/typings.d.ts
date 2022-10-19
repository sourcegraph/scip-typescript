declare var window: Window & typeof globalThis
interface Window {
  process: any
  require: any
}
