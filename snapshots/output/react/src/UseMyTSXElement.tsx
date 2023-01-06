  import React from "react";
// definition react-example 1.0.0 src/`UseMyTSXElement.tsx`/
//documentation ```ts\nmodule "UseMyTSXElement.tsx"\n```
//       ^^^^^ reference @types/react 17.0.52 `index.d.ts`/React/
//                  ^^^^^^^ reference @types/react 17.0.52 `index.d.ts`/
  
  import { MyProps, MyTSXElement } from "./MyTSXElement";
//         ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                  ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                                      ^^^^^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/
  
  export const _: React.FunctionComponent<MyProps> =
//             ^ definition react-example 1.0.0 src/`UseMyTSXElement.tsx`/_.
//             documentation ```ts\nvar _: FunctionComponent<MyProps>\n```
//                ^^^^^ reference @types/react 17.0.52 `index.d.ts`/React/
//                      ^^^^^^^^^^^^^^^^^ reference @types/react 17.0.52 `index.d.ts`/React/FunctionComponent#
//                                        ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
      ({}) => (<MyTSXElement></MyTSXElement>)
//              ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                             ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
