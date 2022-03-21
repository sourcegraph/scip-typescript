  // This file reproduces the following issue https://github.com/sourcegraph/lsif-typescript/issues/46
  import React, { FunctionComponent } from 'react'
//       ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                ^^^^^^^^^^^^^^^^^ reference local 0
  
  interface Step {
//          ^^^^ definition react-example 1.0.0 src/`Issue46_Component.tsx`/Step#
    content: React.ReactElement
//  ^^^^^^^ definition react-example 1.0.0 src/`Issue46_Component.tsx`/Step#content.
//           ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                 ^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/ReactElement#
    isComplete: () => boolean
//  ^^^^^^^^^^ definition react-example 1.0.0 src/`Issue46_Component.tsx`/Step#isComplete.
    prefetch?: () => void
//  ^^^^^^^^ definition react-example 1.0.0 src/`Issue46_Component.tsx`/Step#prefetch.
    onNextButtonClick?: () => Promise<void>
//  ^^^^^^^^^^^^^^^^^ definition react-example 1.0.0 src/`Issue46_Component.tsx`/Step#onNextButtonClick.
//                            ^^^^^^^ reference typescript 4.6.2 lib/`lib.es5.d.ts`/Promise#
//                            ^^^^^^^ reference typescript 4.6.2 lib/`lib.es2015.iterable.d.ts`/Promise#
//                            ^^^^^^^ reference typescript 4.6.2 lib/`lib.es2015.promise.d.ts`/Promise.
//                            ^^^^^^^ reference typescript 4.6.2 lib/`lib.es2015.symbol.wellknown.d.ts`/Promise#
//                            ^^^^^^^ reference typescript 4.6.2 lib/`lib.es2018.promise.d.ts`/Promise#
  }
  
  export const Component: FunctionComponent<Step> = props => {
//             ^^^^^^^^^ definition react-example 1.0.0 src/`Issue46_Component.tsx`/Component.
//                        ^^^^^^^^^^^^^^^^^ reference local 0
//                                          ^^^^ reference react-example 1.0.0 src/`Issue46_Component.tsx`/Step#
//                                                  ^^^^^ definition local 2
    return <div></div>
//          ^^^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#div.
//                ^^^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#div.
  }
  
