// < definition react-example 1.0.0 src/`UseMyTSXElement.tsx`/

import React from "react";
//     ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                ^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/

import { MyProps, MyTSXElement } from "./MyTSXElement";
//       ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                                    ^^^^^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/

export const _: React.FunctionComponent<MyProps> =
//           ^ definition react-example 1.0.0 src/`UseMyTSXElement.tsx`/_.
//              ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                    ^^^^^^^^^^^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/FunctionComponent#
//                                      ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
    ({}) => (<MyTSXElement></MyTSXElement>)
//            ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                           ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
