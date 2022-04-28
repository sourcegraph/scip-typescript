  import React from 'react'
//       ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
  
  export interface MyProps {}
//                 ^^^^^^^ definition react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                 documentation ```ts\ninterface MyProps\n```
  
  export const MyTSXElement: React.FunctionComponent<MyProps> = ({}) => (<p></p>)
//             ^^^^^^^^^^^^ definition react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//             documentation ```ts\nvar MyTSXElement: FunctionComponent<MyProps>\n```
//                           ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                                 ^^^^^^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
//                                                   ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                                                                        ^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#p.
//                                                                            ^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#p.
