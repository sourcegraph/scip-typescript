  import React from 'react'
//       ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
  
  import { Step } from './Steps'
//         ^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
//         ^^^^ reference react-example 1.0.0 src/`Shadow.tsx`/Step#
  
  interface Step {
//          ^^^^ definition @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
    content: React.ReactElement
//  ^^^^^^^ definition react-example 1.0.0 src/`Shadow.tsx`/Step#content.
//           ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                 ^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/ReactElement#
  }
  
