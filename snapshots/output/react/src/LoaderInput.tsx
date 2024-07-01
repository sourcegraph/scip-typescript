// < definition react-example 1.0.0 src/`LoaderInput.tsx`/

import React from 'react'
//     ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                ^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/

/** Takes loading prop, input component as child */
interface Props {
//        ^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/Props#
  loading: boolean
//^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/loading0:
  children: React.ReactNode
//^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/children0:
//          ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                ^^^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/ReactNode#
}

export const LoaderInput: React.FunctionComponent<Props> = ({
//           ^^^^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                        ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                              ^^^^^^^^^^^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/FunctionComponent#
//                                                ^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#
  loading,
//^^^^^^^ definition local 4
//^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/loading0:
  children,
//^^^^^^^^ definition local 5
//^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/children0:
}) => (
  <div className="hello">
// ^^^ reference @types/react 18.2.39 `index.d.ts`/div0:
//     ^^^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/className0:
    {children}
//   ^^^^^^^^ reference local 5
    {loading && <p>spinner</p>}
//   ^^^^^^^ reference local 4
//               ^ reference @types/react 18.2.39 `index.d.ts`/p0:
//                          ^ reference @types/react 18.2.39 `index.d.ts`/p0:
  </div>
//  ^^^ reference @types/react 18.2.39 `index.d.ts`/div0:
)

export const LoaderInput2: React.FunctionComponent<Props> = props => {
//           ^^^^^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput2.
//                         ^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/
//                               ^^^^^^^^^^^^^^^^^ reference @types/react 18.2.39 `index.d.ts`/React/FunctionComponent#
//                                                 ^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#
//                                                          ^^^^^ definition local 705
  return <LoaderInput loading={true} key="key" children={props.children} />
//        ^^^^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                    ^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/loading0:
//                                   ^^^ reference local 709
//                                             ^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/children0:
//                                                       ^^^^^ reference local 705
//                                                             ^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/children0:
}

