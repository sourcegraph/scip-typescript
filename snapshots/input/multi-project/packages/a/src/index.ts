// format-options: showDocs

export function a(): string {
  return ''
}

export function localResult() {
  interface LocalResult {
    value: string
  }
  return { value: '' } as LocalResult
}
