  import React from "react";
//       ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
  
  import { MyProps, MyTSXElement } from "./MyTSXElement";
//         ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                  ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
  
  export const _: React.FunctionComponent<MyProps> =
//             ^ definition react-example 1.0.0 src/`UseMyTSXElement.tsx`/_.
//             documentation ```ts\nvar _: FunctionComponent<MyProps>\n```
//                ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                      ^^^^^^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
//                                        ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
      ({}) => (<MyTSXElement></MyTSXElement>)
//              ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                             ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
