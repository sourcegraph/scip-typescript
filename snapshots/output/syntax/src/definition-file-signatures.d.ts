// < definition syntax 1.0.0 src/`definition-file-signatures.d.ts`/

// format-options: showSignatures
export namespace minimized {
//               ^^^^^^^^^ definition syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/
//               info {
//               |   "symbol": "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/",
//               |   "documentation": [
//               |     "```ts\nminimized: typeof minimized\n```"
//               |   ],
//               |   "relationships": [],
//               |   "kind": 0,
//               |   "display_name": "minimized",
//               |   "enclosing_symbol": "",
//               |   "signature": {}
//               | }
  export enum NumericLiteralEnum {
//            ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/NumericLiteralEnum#
//            info {
//            |   "symbol": "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/NumericLiteralEnum#",
//            |   "documentation": [
//            |     "```ts\nenum NumericLiteralEnum\n```"
//            |   ],
//            |   "relationships": [],
//            |   "kind": 11,
//            |   "display_name": "NumericLiteralEnum",
//            |   "enclosing_symbol": "",
//            |   "signature": {
//            |     "class_signature": {
//            |       "parents": [],
//            |       "declarations": {
//            |         "symlinks": [
//            |           "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/NumericLiteralEnum#One.",
//            |           "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/NumericLiteralEnum#TwoThousand."
//            |         ],
//            |         "hardlinks": []
//            |       }
//            |     }
//            |   }
//            | }
    One = 1,
//  ^^^ definition syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/NumericLiteralEnum#One.
//  info {
//  |   "symbol": "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/NumericLiteralEnum#One.",
//  |   "documentation": [
//  |     "```ts\n(enum member) One = 1\n```"
//  |   ],
//  |   "relationships": [],
//  |   "kind": 12,
//  |   "display_name": "One",
//  |   "enclosing_symbol": "",
//  |   "signature": {
//  |     "value_signature": {
//  |       "tpe": {
//  |         "constant_type": {
//  |           "constant": {
//  |             "int_constant": {
//  |               "value": 1
//  |             }
//  |           }
//  |         }
//  |       }
//  |     }
//  |   }
//  | }
    TwoThousand = 2_000,
//  ^^^^^^^^^^^ definition syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/NumericLiteralEnum#TwoThousand.
//  info {
//  |   "symbol": "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/NumericLiteralEnum#TwoThousand.",
//  |   "documentation": [
//  |     "```ts\n(enum member) TwoThousand = 2000\n```"
//  |   ],
//  |   "relationships": [],
//  |   "kind": 12,
//  |   "display_name": "TwoThousand",
//  |   "enclosing_symbol": "",
//  |   "signature": {
//  |     "value_signature": {
//  |       "tpe": {
//  |         "constant_type": {
//  |           "constant": {
//  |             "int_constant": {
//  |               "value": 2000
//  |             }
//  |           }
//  |         }
//  |       }
//  |     }
//  |   }
//  | }
  }

  export const doubleConstant = 3.14
//             ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/doubleConstant.
//             info {
//             |   "symbol": "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/doubleConstant.",
//             |   "documentation": [
//             |     "```ts\nvar doubleConstant: 3.14\n```"
//             |   ],
//             |   "relationships": [],
//             |   "kind": 61,
//             |   "display_name": "doubleConstant",
//             |   "enclosing_symbol": "",
//             |   "signature": {
//             |     "value_signature": {
//             |       "tpe": {
//             |         "constant_type": {
//             |           "constant": {
//             |             "double_constant": {
//             |               "value": 3.14
//             |             }
//             |           }
//             |         }
//             |       }
//             |     }
//             |   }
//             | }

  export enum StringLiteralEnum {
//            ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/StringLiteralEnum#
//            info {
//            |   "symbol": "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/StringLiteralEnum#",
//            |   "documentation": [
//            |     "```ts\nenum StringLiteralEnum\n```"
//            |   ],
//            |   "relationships": [],
//            |   "kind": 11,
//            |   "display_name": "StringLiteralEnum",
//            |   "enclosing_symbol": "",
//            |   "signature": {
//            |     "class_signature": {
//            |       "parents": [],
//            |       "declarations": {
//            |         "symlinks": [
//            |           "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/StringLiteralEnum#Saturday.",
//            |           "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/StringLiteralEnum#Sunday."
//            |         ],
//            |         "hardlinks": []
//            |       }
//            |     }
//            |   }
//            | }
    Saturday = 'saturday',
//  ^^^^^^^^ definition syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/StringLiteralEnum#Saturday.
//  info {
//  |   "symbol": "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/StringLiteralEnum#Saturday.",
//  |   "documentation": [
//  |     "```ts\n(enum member) Saturday = saturday\n```"
//  |   ],
//  |   "relationships": [],
//  |   "kind": 12,
//  |   "display_name": "Saturday",
//  |   "enclosing_symbol": "",
//  |   "signature": {
//  |     "value_signature": {
//  |       "tpe": {
//  |         "constant_type": {
//  |           "constant": {
//  |             "string_constant": {
//  |               "value": "saturday"
//  |             }
//  |           }
//  |         }
//  |       }
//  |     }
//  |   }
//  | }
    Sunday = 'sunday',
//  ^^^^^^ definition syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/StringLiteralEnum#Sunday.
//  info {
//  |   "symbol": "scip-typescript npm syntax 1.0.0 src/`definition-file-signatures.d.ts`/minimized/StringLiteralEnum#Sunday.",
//  |   "documentation": [
//  |     "```ts\n(enum member) Sunday = sunday\n```"
//  |   ],
//  |   "relationships": [],
//  |   "kind": 12,
//  |   "display_name": "Sunday",
//  |   "enclosing_symbol": "",
//  |   "signature": {
//  |     "value_signature": {
//  |       "tpe": {
//  |         "constant_type": {
//  |           "constant": {
//  |             "string_constant": {
//  |               "value": "sunday"
//  |             }
//  |           }
//  |         }
//  |       }
//  |     }
//  |   }
//  | }
  }
}

