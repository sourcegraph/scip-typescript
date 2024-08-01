// < definition react-example 1.0.0 src/`MyTSXElement.tsx`/

import React from 'react'
//     ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                ^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/

export interface MyProps {}
//               ^^^^^^^ definition react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#

export const MyTSXElement: React.FunctionComponent<MyProps> = ({}) => (<p></p>)
//           ^^^^^^^^^^^^ definition react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                         ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                               ^^^^^^^^^^^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/FunctionComponent#
//                                                 ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                                                                      ^ reference @types/react 18.2.39 `index.d.ts`/p0:
//                                                                          ^ reference @types/react 18.2.39 `index.d.ts`/p0:
