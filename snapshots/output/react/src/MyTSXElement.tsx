  import React from 'react'
// definition react-example 1.0.0 src/`MyTSXElement.tsx`/
//documentation ```ts\nmodule "MyTSXElement.tsx"\n```
//       ^^^^^ reference @types/react 18.2.39 `ts5.0`/`index.d.ts`/React/
//                  ^^^^^^^ reference @types/react 18.2.39 `ts5.0`/`index.d.ts`/
  
  export interface MyProps {}
//                 ^^^^^^^ definition react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                 documentation ```ts\ninterface MyProps\n```
  
  export const MyTSXElement: React.FunctionComponent<MyProps> = ({}) => (<p></p>)
//             ^^^^^^^^^^^^ definition react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//             documentation ```ts\nvar MyTSXElement: FunctionComponent<MyProps>\n```
//                           ^^^^^ reference @types/react 18.2.39 `ts5.0`/`index.d.ts`/React/
//                                 ^^^^^^^^^^^^^^^^^ reference @types/react 18.2.39 `ts5.0`/`index.d.ts`/React/FunctionComponent#
//                                                   ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                                                                        ^ reference @types/react 18.2.39 `ts5.0`/`index.d.ts`/global/JSX/IntrinsicElements#p.
//                                                                            ^ reference @types/react 18.2.39 `ts5.0`/`index.d.ts`/global/JSX/IntrinsicElements#p.
