  import React from "react";
//       ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
  
  import { MyProps, MyTSXElement } from "./MyTSXElement";
//         ^^^^^^^ reference local 0
//                  ^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
  
  export const _: React.FunctionComponent<MyProps> =
//             ^ definition react-example 1.0.0 src/`UseMyTSXElement.tsx`/_.
//                ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                      ^^^^^^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
//                                        ^^^^^^^ reference local 0
      ({}) => (<MyTSXElement></MyTSXElement>)
//              ^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
//                             ^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
