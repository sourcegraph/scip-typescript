  import React from 'react'
//       ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
  
  /** Takes loading prop, input component as child */
  interface Props {
//          ^^^^^ definition example 1.0.0 src/`LoaderInput.tsx`/Props#
      loading: boolean
//    ^^^^^^^ definition example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
      children: React.ReactNode
//    ^^^^^^^^ definition example 1.0.0 src/`LoaderInput.tsx`/Props#children.
//              ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                    ^^^^^^^^^ reference local 0
      className?: string
//    ^^^^^^^^^ definition example 1.0.0 src/`LoaderInput.tsx`/Props#className.
  }
  
  export const LoaderInput: React.FunctionComponent<Props> = ({ loading, children, className }) => (
//             ^^^^^^^^^^^ definition example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                          ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                                ^^^^^^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
//                                                  ^^^^^ reference example 1.0.0 src/`LoaderInput.tsx`/Props#
//                                                              ^^^^^^^ reference local 4
//                                                                       ^^^^^^^^ reference local 5
//                                                                                 ^^^^^^^^^ reference local 6
      <div className="hello">
//     ^^^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#div.
//         ^^^^^^^^^ reference local 11
          {children}
//         ^^^^^^^^ reference local 5
          {loading && <p className="spinner">spinner</p>}
//         ^^^^^^^ reference local 4
//                     ^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#p.
//                       ^^^^^^^^^ reference local 17
//                                                    ^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#p.
      </div>
//      ^^^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#div.
  )
  
