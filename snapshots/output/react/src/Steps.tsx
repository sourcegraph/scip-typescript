  import React from 'react'
//       ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
  
  export interface StepProps {}
//                 ^^^^^^^^^ definition react-example 1.0.0 src/`Steps.tsx`/StepProps#
  
  export const Step: React.FunctionComponent<StepProps> = ({}) => {
//             ^^^^ definition react-example 1.0.0 src/`Steps.tsx`/Step.
//                   ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                         ^^^^^^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
//                                           ^^^^^^^^^ reference react-example 1.0.0 src/`Steps.tsx`/StepProps#
    return (<p></p>)
//           ^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#p.
//               ^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#p.
  }
  
