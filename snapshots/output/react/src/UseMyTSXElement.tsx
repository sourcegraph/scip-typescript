// < definition scip-typescript npm react-example 1.0.0 src/`UseMyTSXElement.tsx`/

import React from "react";
//     ^^^^^ reference scip-typescript npm @types/react 17.0.52 `index.d.ts`/React/
//                ^^^^^^^ reference scip-typescript npm @types/react 17.0.52 `index.d.ts`/

import { MyProps, MyTSXElement } from "./MyTSXElement";
//       ^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                ^^^^^^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                                    ^^^^^^^^^^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`MyTSXElement.tsx`/

export const _: React.FunctionComponent<MyProps> =
//           ^ definition scip-typescript npm react-example 1.0.0 src/`UseMyTSXElement.tsx`/_.
//              ^^^^^ reference scip-typescript npm @types/react 17.0.52 `index.d.ts`/React/
//                    ^^^^^^^^^^^^^^^^^ reference scip-typescript npm @types/react 17.0.52 `index.d.ts`/React/FunctionComponent#
//                                      ^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
    ({}) => (<MyTSXElement></MyTSXElement>)
//            ^^^^^^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                           ^^^^^^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
