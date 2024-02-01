export function foo(): Promise<{ member: number }> {
  return Promise.resolve({ member: 42 })
}
export function bar(): Promise<number> {
  return foo().then(x => x.member)
}
export function bar2(): Promise<number> {
  return foo().then(({ member }) => member)
}

type OptionsFlags<Type> = { [Property in keyof Type]: boolean }
type FeatureFlags = { darkMode: () => void }
export type PropertySignature = {
  'chat/submit': [{ text: { value: string } }]
}
export type FeatureOptions = OptionsFlags<FeatureFlags> // implicitly // type FeatureOptions = { // darkMode: boolean; // } const fo: FeatureOptions = { darkMode: true }; // ^ go to def
export const fo: FeatureOptions = { darkMode: true }
