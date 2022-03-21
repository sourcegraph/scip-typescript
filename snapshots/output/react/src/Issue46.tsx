  // This file reproduces the following issue https://github.com/sourcegraph/lsif-typescript/issues/46
  import React, { FunctionComponent } from 'react'
//       ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                ^^^^^^^^^^^^^^^^^ reference local 0
  import { Component } from './Issue46_Component'
//         ^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
  
  export const UsesComponent: FunctionComponent<void> = () => {
//             ^^^^^^^^^^^^^ definition react-example 1.0.0 src/`Issue46.tsx`/UsesComponent.
//                            ^^^^^^^^^^^^^^^^^ reference local 0
    return <Component content={null} isComplete={() => true}></Component>
//          ^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
//                    ^^^^^^^ reference react-example 1.0.0 src/`Issue46_Component.tsx`/Step#content.
//                                   ^^^^^^^^^^ reference react-example 1.0.0 src/`Issue46_Component.tsx`/Step#isComplete.
//                                                             ^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
  }
  
