// < definition scip-typescript npm react-example 1.0.0 src/`MyTSXElement.tsx`/

import React from 'react'
//     ^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/
//                ^^^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/

export interface MyProps {}
//               ^^^^^^^ definition scip-typescript npm react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#

export const MyTSXElement: React.FunctionComponent<MyProps> = ({}) => (<p></p>)
//           ^^^^^^^^^^^^ definition scip-typescript npm react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                         ^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/
//                               ^^^^^^^^^^^^^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/FunctionComponent#
//                                                 ^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                                                                      ^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/global/JSX/IntrinsicElements#p.
//                                                                          ^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/global/JSX/IntrinsicElements#p.
