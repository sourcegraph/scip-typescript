// < definition scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/

import React from 'react'
//     ^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/
//                ^^^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/

/** Takes loading prop, input component as child */
interface Props {
//        ^^^^^ definition scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/Props#
  loading: boolean
//^^^^^^^ definition scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
  children: React.ReactNode
//^^^^^^^^ definition scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
//          ^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/
//                ^^^^^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/ReactNode#
}

export const LoaderInput: React.FunctionComponent<Props> = ({
//           ^^^^^^^^^^^ definition scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                        ^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/
//                              ^^^^^^^^^^^^^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/FunctionComponent#
//                                                ^^^^^ reference scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/Props#
  loading,
//^^^^^^^ definition local 3
//^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
  children,
//^^^^^^^^ definition local 4
//^^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
}) => (
  <div className="hello">
// ^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/global/JSX/IntrinsicElements#div.
//     ^^^^^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/HTMLAttributes#className.
    {children}
//   ^^^^^^^^ reference local 4
    {loading && <p>spinner</p>}
//   ^^^^^^^ reference local 3
//               ^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/global/JSX/IntrinsicElements#p.
//                          ^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/global/JSX/IntrinsicElements#p.
  </div>
//  ^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/global/JSX/IntrinsicElements#div.
)

export const LoaderInput2: React.FunctionComponent<Props> = props => {
//           ^^^^^^^^^^^^ definition scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput2.
//                         ^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/
//                               ^^^^^^^^^^^^^^^^^ reference scip-typescript npm @types/react 18.2.39 `index.d.ts`/React/FunctionComponent#
//                                                 ^^^^^ reference scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/Props#
//                                                          ^^^^^ definition local 6
  return <LoaderInput loading={true} key="key" children={props.children} />
//        ^^^^^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                    ^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
//                                   ^^^ reference local 10
//                                             ^^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
//                                                       ^^^^^ reference local 6
//                                                             ^^^^^^^^ reference scip-typescript npm react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
}

