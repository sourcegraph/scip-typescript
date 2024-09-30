// < definition react-example 1.0.0 src/`LoaderInput.tsx`/

import React from 'react'
//     ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                ^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/

/** Takes loading prop, input component as child */
interface Props {
//        ^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/Props#
  loading: boolean
//^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
  children: React.ReactNode
//^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
//          ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                ^^^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/ReactNode#
}

export const LoaderInput: React.FunctionComponent<Props> = ({
//           ^^^^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                        ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                              ^^^^^^^^^^^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/FunctionComponent#
//                                                ^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#
  loading,
//^^^^^^^ definition local 3
//^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
  children,
//^^^^^^^^ definition local 4
//^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
}) => (
  <div className="hello">
// ^^^ reference @types/react 18.2.39 `index.d.ts`/global/JSX/IntrinsicElements#div.
//     ^^^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/HTMLAttributes#className.
    {children}
//   ^^^^^^^^ reference local 4
    {loading && <p>spinner</p>}
//   ^^^^^^^ reference local 3
//               ^ reference @types/react 18.2.39 `index.d.ts`/global/JSX/IntrinsicElements#p.
//                          ^ reference @types/react 18.2.39 `index.d.ts`/global/JSX/IntrinsicElements#p.
  </div>
//  ^^^ reference @types/react 18.2.39 `index.d.ts`/global/JSX/IntrinsicElements#div.
)

export const LoaderInput2: React.FunctionComponent<Props> = props => {
//           ^^^^^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput2.
//                         ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                               ^^^^^^^^^^^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/FunctionComponent#
//                                                 ^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#
//                                                          ^^^^^ definition local 6
  return <LoaderInput loading={true} key="key" children={props.children} />
//        ^^^^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                    ^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
//                                   ^^^ reference @types/react 18.2.39 `index.d.ts`/React/Attributes#key.
//                                             ^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
//                                                       ^^^^^ reference local 6
//                                                             ^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
}

