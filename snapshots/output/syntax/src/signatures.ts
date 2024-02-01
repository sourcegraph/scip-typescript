// < definition syntax 1.0.0 src/`signatures.ts`/

// format-options: showSignatures

export type Requests = {
//          ^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/Requests#
//          info {
//          |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/Requests#",
//          |   "documentation": [
//          |     "```ts\ntype Requests\n```"
//          |   ],
//          |   "relationships": [],
//          |   "kind": 55,
//          |   "display_name": "Requests",
//          |   "enclosing_symbol": "",
//          |   "signature": {
//          |     "type_signature": {
//          |       "type_parameters": {
//          |         "symlinks": [],
//          |         "hardlinks": []
//          |       },
//          |       "lower_bound": {
//          |         "structural_type": {
//          |           "declarations": {
//          |             "symlinks": [
//          |               "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/`workspace/edit0`:",
//          |               "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/`chat/submitMessage0`:"
//          |             ],
//          |             "hardlinks": []
//          |           }
//          |         }
//          |       }
//          |     }
//          |   }
//          | }
  'workspace/edit': [WorkspaceEditParams, boolean]
//^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/`workspace/edit0`:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/`workspace/edit0`:",
// |   "documentation": [
// |     "```ts\n(property) 'workspace/edit': [WorkspaceEditParams, boolean]\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "workspace/edit",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . tuple#",
// |           "type_arguments": [
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#",
// |                 "type_arguments": []
// |               }
// |             },
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . boolean#",
// |                 "type_arguments": []
// |               }
// |             }
// |           ]
// |         }
// |       }
// |     }
// |   }
// | }
//                   ^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#
  'chat/submitMessage': [WorkspaceEditParams, boolean]
//^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/`chat/submitMessage0`:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/`chat/submitMessage0`:",
// |   "documentation": [
// |     "```ts\n(property) 'chat/submitMessage': [WorkspaceEditParams, boolean]\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "chat/submitMessage",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . tuple#",
// |           "type_arguments": [
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#",
// |                 "type_arguments": []
// |               }
// |             },
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . boolean#",
// |                 "type_arguments": []
// |               }
// |             }
// |           ]
// |         }
// |       }
// |     }
// |   }
// | }
//                       ^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#
}

export type Notifications = {
//          ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/Notifications#
//          info {
//          |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/Notifications#",
//          |   "documentation": [
//          |     "```ts\ntype Notifications\n```"
//          |   ],
//          |   "relationships": [],
//          |   "kind": 55,
//          |   "display_name": "Notifications",
//          |   "enclosing_symbol": "",
//          |   "signature": {
//          |     "type_signature": {
//          |       "type_parameters": {
//          |         "symlinks": [],
//          |         "hardlinks": []
//          |       },
//          |       "lower_bound": {
//          |         "structural_type": {
//          |           "declarations": {
//          |             "symlinks": [
//          |               "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/`workspace/edit1`:"
//          |             ],
//          |             "hardlinks": []
//          |           }
//          |         }
//          |       }
//          |     }
//          |   }
//          | }
  'workspace/edit': [WorkspaceEditParams]
//^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/`workspace/edit1`:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/`workspace/edit1`:",
// |   "documentation": [
// |     "```ts\n(property) 'workspace/edit': [WorkspaceEditParams]\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "workspace/edit",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . tuple#",
// |           "type_arguments": [
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#",
// |                 "type_arguments": []
// |               }
// |             }
// |           ]
// |         }
// |       }
// |     }
// |   }
// | }
//                   ^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#
}

export type Intersection = { uri: string } & { size: number }
//          ^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/Intersection#
//          info {
//          |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/Intersection#",
//          |   "documentation": [
//          |     "```ts\ntype Intersection\n```"
//          |   ],
//          |   "relationships": [],
//          |   "kind": 55,
//          |   "display_name": "Intersection",
//          |   "enclosing_symbol": "",
//          |   "signature": {
//          |     "type_signature": {
//          |       "type_parameters": {
//          |         "symlinks": [],
//          |         "hardlinks": []
//          |       },
//          |       "lower_bound": {
//          |         "intersection_type": {
//          |           "types": [
//          |             {
//          |               "structural_type": {
//          |                 "declarations": {
//          |                   "symlinks": [
//          |                     "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/uri0:"
//          |                   ],
//          |                   "hardlinks": []
//          |                 }
//          |               }
//          |             },
//          |             {
//          |               "structural_type": {
//          |                 "declarations": {
//          |                   "symlinks": [
//          |                     "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/size0:"
//          |                   ],
//          |                   "hardlinks": []
//          |                 }
//          |               }
//          |             }
//          |           ]
//          |         }
//          |       }
//          |     }
//          |   }
//          | }
//                           ^^^ definition syntax 1.0.0 src/`signatures.ts`/uri0:
//                           info {
//                           |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/uri0:",
//                           |   "documentation": [
//                           |     "```ts\n(property) uri: string\n```"
//                           |   ],
//                           |   "relationships": [],
//                           |   "kind": 41,
//                           |   "display_name": "uri",
//                           |   "enclosing_symbol": "",
//                           |   "signature": {
//                           |     "value_signature": {
//                           |       "tpe": {
//                           |         "type_ref": {
//                           |           "symbol": "scip-typescript npm typescript . string#",
//                           |           "type_arguments": []
//                           |         }
//                           |       }
//                           |     }
//                           |   }
//                           | }
//                                             ^^^^ definition syntax 1.0.0 src/`signatures.ts`/size0:
//                                             info {
//                                             |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/size0:",
//                                             |   "documentation": [
//                                             |     "```ts\n(property) size: number\n```"
//                                             |   ],
//                                             |   "relationships": [],
//                                             |   "kind": 41,
//                                             |   "display_name": "size",
//                                             |   "enclosing_symbol": "",
//                                             |   "signature": {
//                                             |     "value_signature": {
//                                             |       "tpe": {
//                                             |         "type_ref": {
//                                             |           "symbol": "scip-typescript npm typescript . number#",
//                                             |           "type_arguments": []
//                                             |         }
//                                             |       }
//                                             |     }
//                                             |   }
//                                             | }
export type Union = { uri: string } | { size: number }
//          ^^^^^ definition syntax 1.0.0 src/`signatures.ts`/Union#
//          info {
//          |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/Union#",
//          |   "documentation": [
//          |     "```ts\ntype Union\n```"
//          |   ],
//          |   "relationships": [],
//          |   "kind": 55,
//          |   "display_name": "Union",
//          |   "enclosing_symbol": "",
//          |   "signature": {
//          |     "type_signature": {
//          |       "type_parameters": {
//          |         "symlinks": [],
//          |         "hardlinks": []
//          |       },
//          |       "lower_bound": {
//          |         "union_type": {
//          |           "types": [
//          |             {
//          |               "structural_type": {
//          |                 "declarations": {
//          |                   "symlinks": [
//          |                     "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/uri1:"
//          |                   ],
//          |                   "hardlinks": []
//          |                 }
//          |               }
//          |             },
//          |             {
//          |               "structural_type": {
//          |                 "declarations": {
//          |                   "symlinks": [
//          |                     "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/size1:"
//          |                   ],
//          |                   "hardlinks": []
//          |                 }
//          |               }
//          |             }
//          |           ]
//          |         }
//          |       }
//          |     }
//          |   }
//          | }
//                    ^^^ definition syntax 1.0.0 src/`signatures.ts`/uri1:
//                    info {
//                    |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/uri1:",
//                    |   "documentation": [
//                    |     "```ts\n(property) uri: string\n```"
//                    |   ],
//                    |   "relationships": [],
//                    |   "kind": 41,
//                    |   "display_name": "uri",
//                    |   "enclosing_symbol": "",
//                    |   "signature": {
//                    |     "value_signature": {
//                    |       "tpe": {
//                    |         "type_ref": {
//                    |           "symbol": "scip-typescript npm typescript . string#",
//                    |           "type_arguments": []
//                    |         }
//                    |       }
//                    |     }
//                    |   }
//                    | }
//                                      ^^^^ definition syntax 1.0.0 src/`signatures.ts`/size1:
//                                      info {
//                                      |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/size1:",
//                                      |   "documentation": [
//                                      |     "```ts\n(property) size: number\n```"
//                                      |   ],
//                                      |   "relationships": [],
//                                      |   "kind": 41,
//                                      |   "display_name": "size",
//                                      |   "enclosing_symbol": "",
//                                      |   "signature": {
//                                      |     "value_signature": {
//                                      |       "tpe": {
//                                      |         "type_ref": {
//                                      |           "symbol": "scip-typescript npm typescript . number#",
//                                      |           "type_arguments": []
//                                      |         }
//                                      |       }
//                                      |     }
//                                      |   }
//                                      | }
export type Builtin = Pick<WorkspaceEditParams, 'changes'>
//          ^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/Builtin#
//          info {
//          |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/Builtin#",
//          |   "documentation": [
//          |     "```ts\ntype Builtin\n```"
//          |   ],
//          |   "relationships": [],
//          |   "kind": 55,
//          |   "display_name": "Builtin",
//          |   "enclosing_symbol": "",
//          |   "signature": {
//          |     "type_signature": {
//          |       "type_parameters": {
//          |         "symlinks": [],
//          |         "hardlinks": []
//          |       },
//          |       "lower_bound": {
//          |         "type_ref": {
//          |           "symbol": "scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Pick#",
//          |           "type_arguments": [
//          |             {
//          |               "type_ref": {
//          |                 "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#",
//          |                 "type_arguments": []
//          |               }
//          |             },
//          |             {
//          |               "constant_type": {
//          |                 "constant": {
//          |                   "string_constant": {
//          |                     "value": "changes"
//          |                   }
//          |                 }
//          |               }
//          |             }
//          |           ]
//          |         }
//          |       }
//          |     }
//          |   }
//          | }
//                    ^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Pick#
//                         ^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#
export type Builtin2 = Partial<WorkspaceEditParams>
//          ^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/Builtin2#
//          info {
//          |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/Builtin2#",
//          |   "documentation": [
//          |     "```ts\ntype Builtin2\n```"
//          |   ],
//          |   "relationships": [],
//          |   "kind": 55,
//          |   "display_name": "Builtin2",
//          |   "enclosing_symbol": "",
//          |   "signature": {
//          |     "type_signature": {
//          |       "type_parameters": {
//          |         "symlinks": [],
//          |         "hardlinks": []
//          |       },
//          |       "lower_bound": {
//          |         "type_ref": {
//          |           "symbol": "scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Partial#",
//          |           "type_arguments": [
//          |             {
//          |               "type_ref": {
//          |                 "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#",
//          |                 "type_arguments": []
//          |               }
//          |             }
//          |           ]
//          |         }
//          |       }
//          |     }
//          |   }
//          | }
//                     ^^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Partial#
//                             ^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#
export interface WorkspaceEditParams {
//               ^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#
//               info {
//               |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/WorkspaceEditParams#",
//               |   "documentation": [
//               |     "```ts\ninterface WorkspaceEditParams\n```"
//               |   ],
//               |   "relationships": [],
//               |   "kind": 21,
//               |   "display_name": "WorkspaceEditParams",
//               |   "enclosing_symbol": "",
//               |   "signature": {
//               |     "class_signature": {
//               |       "type_parameters": {
//               |         "symlinks": [],
//               |         "hardlinks": []
//               |       },
//               |       "parents": [],
//               |       "declarations": {
//               |         "symlinks": [
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/changes0:"
//               |         ],
//               |         "hardlinks": []
//               |       }
//               |     }
//               |   }
//               | }
  changes: { uri: string }[]
//^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/changes0:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/changes0:",
// |   "documentation": [
// |     "```ts\n(property) changes: { uri: string; }[]\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "changes",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . array#",
// |           "type_arguments": [
// |             {
// |               "structural_type": {
// |                 "declarations": {
// |                   "symlinks": [
// |                     "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/uri2:"
// |                   ],
// |                   "hardlinks": []
// |                 }
// |               }
// |             }
// |           ]
// |         }
// |       }
// |     }
// |   }
// | }
//           ^^^ definition syntax 1.0.0 src/`signatures.ts`/uri2:
//           info {
//           |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/uri2:",
//           |   "documentation": [
//           |     "```ts\n(property) uri: string\n```"
//           |   ],
//           |   "relationships": [],
//           |   "kind": 41,
//           |   "display_name": "uri",
//           |   "enclosing_symbol": "",
//           |   "signature": {
//           |     "value_signature": {
//           |       "tpe": {
//           |         "type_ref": {
//           |           "symbol": "scip-typescript npm typescript . string#",
//           |           "type_arguments": []
//           |         }
//           |       }
//           |     }
//           |   }
//           | }
}

export interface OptionalProperty {
//               ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/OptionalProperty#
//               info {
//               |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/OptionalProperty#",
//               |   "documentation": [
//               |     "```ts\ninterface OptionalProperty\n```"
//               |   ],
//               |   "relationships": [],
//               |   "kind": 21,
//               |   "display_name": "OptionalProperty",
//               |   "enclosing_symbol": "",
//               |   "signature": {
//               |     "class_signature": {
//               |       "type_parameters": {
//               |         "symlinks": [],
//               |         "hardlinks": []
//               |       },
//               |       "parents": [],
//               |       "declarations": {
//               |         "symlinks": [
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/optional10:",
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/optional20:",
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/optional30:",
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/optional40:"
//               |         ],
//               |         "hardlinks": []
//               |       }
//               |     }
//               |   }
//               | }
  optional1?: string
//^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/optional10:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/optional10:",
// |   "documentation": [
// |     "```ts\n(property) optional1: string\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "optional1",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "union_type": {
// |           "types": [
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . string#",
// |                 "type_arguments": []
// |               }
// |             },
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . undefined#",
// |                 "type_arguments": []
// |               }
// |             }
// |           ]
// |         }
// |       }
// |     }
// |   }
// | }
  optional2?: number | null
//^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/optional20:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/optional20:",
// |   "documentation": [
// |     "```ts\n(property) optional2: number\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "optional2",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "union_type": {
// |           "types": [
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . number#",
// |                 "type_arguments": []
// |               }
// |             },
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . null#",
// |                 "type_arguments": []
// |               }
// |             },
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . undefined#",
// |                 "type_arguments": []
// |               }
// |             }
// |           ]
// |         }
// |       }
// |     }
// |   }
// | }
  optional3?: number | undefined
//^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/optional30:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/optional30:",
// |   "documentation": [
// |     "```ts\n(property) optional3: number\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "optional3",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "union_type": {
// |           "types": [
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . number#",
// |                 "type_arguments": []
// |               }
// |             },
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . undefined#",
// |                 "type_arguments": []
// |               }
// |             }
// |           ]
// |         }
// |       }
// |     }
// |   }
// | }
  optional4?: undefined
//^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/optional40:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/optional40:",
// |   "documentation": [
// |     "```ts\n(property) optional4: undefined\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "optional4",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . undefined#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
}

export interface ExampleSuperInterface<T> {
//               ^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#
//               info {
//               |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#",
//               |   "documentation": [
//               |     "```ts\ninterface ExampleSuperInterface\n```"
//               |   ],
//               |   "relationships": [],
//               |   "kind": 21,
//               |   "display_name": "ExampleSuperInterface",
//               |   "enclosing_symbol": "",
//               |   "signature": {
//               |     "class_signature": {
//               |       "type_parameters": {
//               |         "symlinks": [
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#[T]"
//               |         ],
//               |         "hardlinks": []
//               |       },
//               |       "parents": [],
//               |       "declarations": {
//               |         "symlinks": [
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/a0:",
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/b0:"
//               |         ],
//               |         "hardlinks": []
//               |       }
//               |     }
//               |   }
//               | }
//                                     ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#[T]
//                                     info {
//                                     |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#[T]",
//                                     |   "documentation": [
//                                     |     "```ts\nT: T\n```"
//                                     |   ],
//                                     |   "relationships": [],
//                                     |   "kind": 58,
//                                     |   "display_name": "T",
//                                     |   "enclosing_symbol": "",
//                                     |   "signature": {}
//                                     | }
  a: T
//^ definition syntax 1.0.0 src/`signatures.ts`/a0:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/a0:",
// |   "documentation": [
// |     "```ts\n(property) a: T\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "a",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#[T]",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
//   ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#[T]
  b: string
//^ definition syntax 1.0.0 src/`signatures.ts`/b0:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/b0:",
// |   "documentation": [
// |     "```ts\n(property) b: string\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "b",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . string#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
}
export interface ExampleInterface<T> extends ExampleSuperInterface<T> {
//               ^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/ExampleInterface#
//               info {
//               |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleInterface#",
//               |   "documentation": [
//               |     "```ts\ninterface ExampleInterface\n```"
//               |   ],
//               |   "relationships": [],
//               |   "kind": 21,
//               |   "display_name": "ExampleInterface",
//               |   "enclosing_symbol": "",
//               |   "signature": {
//               |     "class_signature": {
//               |       "type_parameters": {
//               |         "symlinks": [
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleInterface#[T]"
//               |         ],
//               |         "hardlinks": []
//               |       },
//               |       "parents": [
//               |         {
//               |           "type_ref": {
//               |             "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#",
//               |             "type_arguments": [
//               |               {
//               |                 "type_ref": {
//               |                   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleInterface#[T]",
//               |                   "type_arguments": []
//               |                 }
//               |               }
//               |             ]
//               |           }
//               |         }
//               |       ],
//               |       "declarations": {
//               |         "symlinks": [
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/c0:"
//               |         ],
//               |         "hardlinks": []
//               |       }
//               |     }
//               |   }
//               | }
//                                ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleInterface#[T]
//                                info {
//                                |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleInterface#[T]",
//                                |   "documentation": [
//                                |     "```ts\nT: T\n```"
//                                |   ],
//                                |   "relationships": [],
//                                |   "kind": 58,
//                                |   "display_name": "T",
//                                |   "enclosing_symbol": "",
//                                |   "signature": {}
//                                | }
//                                           ^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#
//                                                                 ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleInterface#[T]
  c: number
//^ definition syntax 1.0.0 src/`signatures.ts`/c0:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/c0:",
// |   "documentation": [
// |     "```ts\n(property) c: number\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "c",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . number#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
}
export class ExampleSuperClass<T> {
//           ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#
//           info {
//           |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#",
//           |   "documentation": [
//           |     "```ts\nclass ExampleSuperClass\n```"
//           |   ],
//           |   "relationships": [],
//           |   "kind": 7,
//           |   "display_name": "ExampleSuperClass",
//           |   "enclosing_symbol": "",
//           |   "signature": {
//           |     "class_signature": {
//           |       "type_parameters": {
//           |         "symlinks": [
//           |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#[T]"
//           |         ],
//           |         "hardlinks": []
//           |       },
//           |       "parents": [],
//           |       "declarations": {
//           |         "symlinks": [
//           |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#`<constructor>`()."
//           |         ],
//           |         "hardlinks": []
//           |       }
//           |     }
//           |   }
//           | }
//                             ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#[T]
//                             info {
//                             |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#[T]",
//                             |   "documentation": [
//                             |     "```ts\nT: T\n```"
//                             |   ],
//                             |   "relationships": [],
//                             |   "kind": 58,
//                             |   "display_name": "T",
//                             |   "enclosing_symbol": "",
//                             |   "signature": {}
//                             | }
  constructor(
//^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#`<constructor>`().
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#`<constructor>`().",
// |   "documentation": [
// |     "```ts\nconstructor<T>(a: T, b: string): ExampleSuperClass<T>\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 9,
// |   "display_name": "",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "method_signature": {
// |       "type_parameters": {
// |         "symlinks": [],
// |         "hardlinks": []
// |       },
// |       "parameter_lists": [
// |         {
// |           "symlinks": [
// |             "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#`<constructor>`().(a)",
// |             "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#`<constructor>`().(b)"
// |           ],
// |           "hardlinks": []
// |         }
// |       ]
// |     }
// |   }
// | }
    public a: T,
//         ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#`<constructor>`().(a)
//         info {
//         |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#`<constructor>`().(a)",
//         |   "documentation": [
//         |     "```ts\n(property) a: T\n```"
//         |   ],
//         |   "relationships": [],
//         |   "kind": 37,
//         |   "display_name": "a",
//         |   "enclosing_symbol": "",
//         |   "signature": {
//         |     "value_signature": {
//         |       "tpe": {
//         |         "type_ref": {
//         |           "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#[T]",
//         |           "type_arguments": []
//         |         }
//         |       }
//         |     }
//         |   }
//         | }
//            ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#[T]
    public b: string
//         ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#`<constructor>`().(b)
//         info {
//         |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#`<constructor>`().(b)",
//         |   "documentation": [
//         |     "```ts\n(property) b: string\n```"
//         |   ],
//         |   "relationships": [],
//         |   "kind": 37,
//         |   "display_name": "b",
//         |   "enclosing_symbol": "",
//         |   "signature": {
//         |     "value_signature": {
//         |       "tpe": {
//         |         "type_ref": {
//         |           "symbol": "scip-typescript npm typescript . string#",
//         |           "type_arguments": []
//         |         }
//         |       }
//         |     }
//         |   }
//         | }
  ) {}
}

export class ExampleClass<T>
//           ^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#
//           relationship implementation syntax 1.0.0 src/`signatures.ts`/ExampleInterface#
//           relationship implementation syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#
//           relationship implementation syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#
//           info {
//           |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#",
//           |   "documentation": [
//           |     "```ts\nclass ExampleClass\n```"
//           |   ],
//           |   "relationships": [
//           |     {
//           |       "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleInterface#",
//           |       "is_reference": false,
//           |       "is_implementation": true,
//           |       "is_type_definition": false,
//           |       "is_definition": false
//           |     },
//           |     {
//           |       "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#",
//           |       "is_reference": false,
//           |       "is_implementation": true,
//           |       "is_type_definition": false,
//           |       "is_definition": false
//           |     },
//           |     {
//           |       "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#",
//           |       "is_reference": false,
//           |       "is_implementation": true,
//           |       "is_type_definition": false,
//           |       "is_definition": false
//           |     }
//           |   ],
//           |   "kind": 7,
//           |   "display_name": "ExampleClass",
//           |   "enclosing_symbol": "",
//           |   "signature": {
//           |     "class_signature": {
//           |       "type_parameters": {
//           |         "symlinks": [
//           |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]"
//           |         ],
//           |         "hardlinks": []
//           |       },
//           |       "parents": [
//           |         {
//           |           "type_ref": {
//           |             "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#",
//           |             "type_arguments": [
//           |               {
//           |                 "type_ref": {
//           |                   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]",
//           |                   "type_arguments": []
//           |                 }
//           |               }
//           |             ]
//           |           }
//           |         },
//           |         {
//           |           "type_ref": {
//           |             "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#",
//           |             "type_arguments": [
//           |               {
//           |                 "type_ref": {
//           |                   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]",
//           |                   "type_arguments": []
//           |                 }
//           |               }
//           |             ]
//           |           }
//           |         },
//           |         {
//           |           "type_ref": {
//           |             "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleInterface#",
//           |             "type_arguments": [
//           |               {
//           |                 "type_ref": {
//           |                   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]",
//           |                   "type_arguments": []
//           |                 }
//           |               }
//           |             ]
//           |           }
//           |         }
//           |       ],
//           |       "declarations": {
//           |         "symlinks": [
//           |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#d.",
//           |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`#e`.",
//           |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().",
//           |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#getC().",
//           |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<get>e`().",
//           |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<set>setB`()."
//           |         ],
//           |         "hardlinks": []
//           |       }
//           |     }
//           |   }
//           | }
//                        ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]
//                        info {
//                        |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]",
//                        |   "documentation": [
//                        |     "```ts\nT: T\n```"
//                        |   ],
//                        |   "relationships": [],
//                        |   "kind": 58,
//                        |   "display_name": "T",
//                        |   "enclosing_symbol": "",
//                        |   "signature": {}
//                        | }
  extends ExampleSuperClass<T>
//        ^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`signatures.ts`/ExampleSuperClass#
//                          ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]
  implements ExampleSuperInterface<T>, ExampleInterface<T>
//           ^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`signatures.ts`/ExampleSuperInterface#
//                                 ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]
//                                     ^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`signatures.ts`/ExampleInterface#
//                                                      ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]
{
  public d: Record<string, any>
//       ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#d.
//       info {
//       |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#d.",
//       |   "documentation": [
//       |     "```ts\n(property) d: Record<string, any>\n```"
//       |   ],
//       |   "relationships": [],
//       |   "kind": 41,
//       |   "display_name": "d",
//       |   "enclosing_symbol": "",
//       |   "signature": {
//       |     "value_signature": {
//       |       "tpe": {
//       |         "type_ref": {
//       |           "symbol": "scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Record#",
//       |           "type_arguments": [
//       |             {
//       |               "type_ref": {
//       |                 "symbol": "scip-typescript npm typescript . string#",
//       |                 "type_arguments": []
//       |               }
//       |             },
//       |             {
//       |               "type_ref": {
//       |                 "symbol": "scip-typescript npm typescript . any#",
//       |                 "type_arguments": []
//       |               }
//       |             }
//       |           ]
//       |         }
//       |       }
//       |     }
//       |   }
//       | }
//          ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Record#

  #e = true
//^^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#`#e`.
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`#e`.",
// |   "documentation": [
// |     "```ts\n(property) #e: boolean\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "#e",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . true#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }

  constructor(
//^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().",
// |   "documentation": [
// |     "```ts\nconstructor<T>(a: T, b: string, c: number, d: Record<string, any>): ExampleClass<T>\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 9,
// |   "display_name": "",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "method_signature": {
// |       "type_parameters": {
// |         "symlinks": [],
// |         "hardlinks": []
// |       },
// |       "parameter_lists": [
// |         {
// |           "symlinks": [
// |             "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(a)",
// |             "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(b)",
// |             "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(c)",
// |             "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(d)"
// |           ],
// |           "hardlinks": []
// |         }
// |       ]
// |     }
// |   }
// | }
    public a: T,
//         ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(a)
//         info {
//         |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(a)",
//         |   "documentation": [
//         |     "```ts\n(property) a: T\n```"
//         |   ],
//         |   "relationships": [],
//         |   "kind": 37,
//         |   "display_name": "a",
//         |   "enclosing_symbol": "",
//         |   "signature": {
//         |     "value_signature": {
//         |       "tpe": {
//         |         "type_ref": {
//         |           "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]",
//         |           "type_arguments": []
//         |         }
//         |       }
//         |     }
//         |   }
//         | }
//            ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#[T]
    public b: string,
//         ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(b)
//         info {
//         |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(b)",
//         |   "documentation": [
//         |     "```ts\n(property) b: string\n```"
//         |   ],
//         |   "relationships": [],
//         |   "kind": 37,
//         |   "display_name": "b",
//         |   "enclosing_symbol": "",
//         |   "signature": {
//         |     "value_signature": {
//         |       "tpe": {
//         |         "type_ref": {
//         |           "symbol": "scip-typescript npm typescript . string#",
//         |           "type_arguments": []
//         |         }
//         |       }
//         |     }
//         |   }
//         | }
    public c: number,
//         ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(c)
//         info {
//         |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(c)",
//         |   "documentation": [
//         |     "```ts\n(property) c: number\n```"
//         |   ],
//         |   "relationships": [],
//         |   "kind": 37,
//         |   "display_name": "c",
//         |   "enclosing_symbol": "",
//         |   "signature": {
//         |     "value_signature": {
//         |       "tpe": {
//         |         "type_ref": {
//         |           "symbol": "scip-typescript npm typescript . number#",
//         |           "type_arguments": []
//         |         }
//         |       }
//         |     }
//         |   }
//         | }
    d: Record<string, any>
//  ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(d)
//  info {
//  |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(d)",
//  |   "documentation": [
//  |     "```ts\n(parameter) d: Record<string, any>\n```"
//  |   ],
//  |   "relationships": [],
//  |   "kind": 37,
//  |   "display_name": "d",
//  |   "enclosing_symbol": "",
//  |   "signature": {
//  |     "value_signature": {
//  |       "tpe": {
//  |         "type_ref": {
//  |           "symbol": "scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Record#",
//  |           "type_arguments": [
//  |             {
//  |               "type_ref": {
//  |                 "symbol": "scip-typescript npm typescript . string#",
//  |                 "type_arguments": []
//  |               }
//  |             },
//  |             {
//  |               "type_ref": {
//  |                 "symbol": "scip-typescript npm typescript . any#",
//  |                 "type_arguments": []
//  |               }
//  |             }
//  |           ]
//  |         }
//  |       }
//  |     }
//  |   }
//  | }
//     ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Record#
  ) {
    super(a, b)
//        ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(a)
//           ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(b)
    this.d = d
//       ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#d.
//           ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(d)
  }
  public getC(): number {
//       ^^^^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#getC().
//       info {
//       |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#getC().",
//       |   "documentation": [
//       |     "```ts\n(method) getC(): number\n```"
//       |   ],
//       |   "relationships": [],
//       |   "kind": 26,
//       |   "display_name": "getC",
//       |   "enclosing_symbol": "",
//       |   "signature": {
//       |     "method_signature": {
//       |       "type_parameters": {
//       |         "symlinks": [],
//       |         "hardlinks": []
//       |       },
//       |       "parameter_lists": [
//       |         {
//       |           "symlinks": [],
//       |           "hardlinks": []
//       |         }
//       |       ],
//       |       "return_type": {
//       |         "type_ref": {
//       |           "symbol": "scip-typescript npm typescript . number#",
//       |           "type_arguments": []
//       |         }
//       |       }
//       |     }
//       |   }
//       | }
    return this.c
//              ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(c)
  }

  get e(): boolean {
//    ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<get>e`().
//    info {
//    |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<get>e`().",
//    |   "documentation": [
//    |     "```ts\nget e: boolean\n```"
//    |   ],
//    |   "relationships": [],
//    |   "kind": 26,
//    |   "display_name": "e",
//    |   "enclosing_symbol": "",
//    |   "signature": {
//    |     "method_signature": {
//    |       "type_parameters": {
//    |         "symlinks": [],
//    |         "hardlinks": []
//    |       },
//    |       "parameter_lists": [
//    |         {
//    |           "symlinks": [],
//    |           "hardlinks": []
//    |         }
//    |       ],
//    |       "return_type": {
//    |         "type_ref": {
//    |           "symbol": "scip-typescript npm typescript . boolean#",
//    |           "type_arguments": []
//    |         }
//    |       }
//    |     }
//    |   }
//    | }
    return this.#e
//              ^^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#`#e`.
  }

  set setB(b: string) {
//    ^^^^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<set>setB`().
//    info {
//    |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<set>setB`().",
//    |   "documentation": [
//    |     "```ts\nset setBstring\n```"
//    |   ],
//    |   "relationships": [],
//    |   "kind": 26,
//    |   "display_name": "setB",
//    |   "enclosing_symbol": "",
//    |   "signature": {
//    |     "method_signature": {
//    |       "type_parameters": {
//    |         "symlinks": [],
//    |         "hardlinks": []
//    |       },
//    |       "parameter_lists": [
//    |         {
//    |           "symlinks": [
//    |             "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<set>setB`().(b)"
//    |           ],
//    |           "hardlinks": []
//    |         }
//    |       ]
//    |     }
//    |   }
//    | }
//         ^ definition syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<set>setB`().(b)
//         info {
//         |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<set>setB`().(b)",
//         |   "documentation": [
//         |     "```ts\n(parameter) b: string\n```"
//         |   ],
//         |   "relationships": [],
//         |   "kind": 37,
//         |   "display_name": "b",
//         |   "enclosing_symbol": "",
//         |   "signature": {
//         |     "value_signature": {
//         |       "tpe": {
//         |         "type_ref": {
//         |           "symbol": "scip-typescript npm typescript . string#",
//         |           "type_arguments": []
//         |         }
//         |       }
//         |     }
//         |   }
//         | }
    this.#e = true
//       ^^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#`#e`.
    this.b = b
//       ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<constructor>`().(b)
//           ^ reference syntax 1.0.0 src/`signatures.ts`/ExampleClass#`<set>setB`().(b)
  }
}

export function basicFunction<T>(a: T, b: number): string {
//              ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/basicFunction().
//              info {
//              |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/basicFunction().",
//              |   "documentation": [
//              |     "```ts\nfunction basicFunction<T>(a: T, b: number): string\n```"
//              |   ],
//              |   "relationships": [],
//              |   "kind": 17,
//              |   "display_name": "basicFunction",
//              |   "enclosing_symbol": "",
//              |   "signature": {
//              |     "method_signature": {
//              |       "type_parameters": {
//              |         "symlinks": [
//              |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/basicFunction().[T]"
//              |         ],
//              |         "hardlinks": []
//              |       },
//              |       "parameter_lists": [
//              |         {
//              |           "symlinks": [
//              |             "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/basicFunction().(a)",
//              |             "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/basicFunction().(b)"
//              |           ],
//              |           "hardlinks": []
//              |         }
//              |       ],
//              |       "return_type": {
//              |         "type_ref": {
//              |           "symbol": "scip-typescript npm typescript . string#",
//              |           "type_arguments": []
//              |         }
//              |       }
//              |     }
//              |   }
//              | }
//                            ^ definition syntax 1.0.0 src/`signatures.ts`/basicFunction().[T]
//                            info {
//                            |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/basicFunction().[T]",
//                            |   "documentation": [
//                            |     "```ts\nT: T\n```"
//                            |   ],
//                            |   "relationships": [],
//                            |   "kind": 58,
//                            |   "display_name": "T",
//                            |   "enclosing_symbol": "",
//                            |   "signature": {}
//                            | }
//                               ^ definition syntax 1.0.0 src/`signatures.ts`/basicFunction().(a)
//                               info {
//                               |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/basicFunction().(a)",
//                               |   "documentation": [
//                               |     "```ts\n(parameter) a: T\n```"
//                               |   ],
//                               |   "relationships": [],
//                               |   "kind": 37,
//                               |   "display_name": "a",
//                               |   "enclosing_symbol": "",
//                               |   "signature": {
//                               |     "value_signature": {
//                               |       "tpe": {
//                               |         "type_ref": {
//                               |           "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/basicFunction().[T]",
//                               |           "type_arguments": []
//                               |         }
//                               |       }
//                               |     }
//                               |   }
//                               | }
//                                  ^ reference syntax 1.0.0 src/`signatures.ts`/basicFunction().[T]
//                                     ^ definition syntax 1.0.0 src/`signatures.ts`/basicFunction().(b)
//                                     info {
//                                     |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/basicFunction().(b)",
//                                     |   "documentation": [
//                                     |     "```ts\n(parameter) b: number\n```"
//                                     |   ],
//                                     |   "relationships": [],
//                                     |   "kind": 37,
//                                     |   "display_name": "b",
//                                     |   "enclosing_symbol": "",
//                                     |   "signature": {
//                                     |     "value_signature": {
//                                     |       "tpe": {
//                                     |         "type_ref": {
//                                     |           "symbol": "scip-typescript npm typescript . number#",
//                                     |           "type_arguments": []
//                                     |         }
//                                     |       }
//                                     |     }
//                                     |   }
//                                     | }
  return `${a}${b}`
//          ^ reference syntax 1.0.0 src/`signatures.ts`/basicFunction().(a)
//              ^ reference syntax 1.0.0 src/`signatures.ts`/basicFunction().(b)
}
export const constant = 42
//           ^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/constant.
//           info {
//           |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/constant.",
//           |   "documentation": [
//           |     "```ts\nvar constant: 42\n```"
//           |   ],
//           |   "relationships": [],
//           |   "kind": 61,
//           |   "display_name": "constant",
//           |   "enclosing_symbol": "",
//           |   "signature": {
//           |     "value_signature": {
//           |       "tpe": {
//           |         "constant_type": {
//           |           "constant": {
//           |             "int_constant": {
//           |               "value": 42
//           |             }
//           |           }
//           |         }
//           |       }
//           |     }
//           |   }
//           | }
export const variable: <T>(a: T, b: number) => string = (a, b) => `${a}${b}`
//           ^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/variable.
//           info {
//           |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/variable.",
//           |   "documentation": [
//           |     "```ts\nvar variable: <T>(a: T, b: number) => string\n```"
//           |   ],
//           |   "relationships": [],
//           |   "kind": 61,
//           |   "display_name": "variable",
//           |   "enclosing_symbol": "",
//           |   "signature": {
//           |     "value_signature": {
//           |       "tpe": {
//           |         "lambda_type": {
//           |           "type_parameters": {
//           |             "symlinks": [
//           |               "local 1"
//           |             ],
//           |             "hardlinks": []
//           |           },
//           |           "parameters": {
//           |             "symlinks": [
//           |               "local 2",
//           |               "local 3"
//           |             ],
//           |             "hardlinks": []
//           |           },
//           |           "return_type": {
//           |             "type_ref": {
//           |               "symbol": "scip-typescript npm typescript . string#",
//           |               "type_arguments": []
//           |             }
//           |           }
//           |         }
//           |       }
//           |     }
//           |   }
//           | }
//                      ^ definition local 1
//                      info {
//                      |   "symbol": "local 1",
//                      |   "documentation": [
//                      |     "```ts\nT: T\n```"
//                      |   ],
//                      |   "relationships": [],
//                      |   "kind": 58,
//                      |   "display_name": "T",
//                      |   "enclosing_symbol": "",
//                      |   "signature": {}
//                      | }
//                         ^ definition local 2
//                         info {
//                         |   "symbol": "local 2",
//                         |   "documentation": [
//                         |     "```ts\n(parameter) a: T\n```"
//                         |   ],
//                         |   "relationships": [],
//                         |   "kind": 37,
//                         |   "display_name": "a",
//                         |   "enclosing_symbol": "",
//                         |   "signature": {
//                         |     "value_signature": {
//                         |       "tpe": {
//                         |         "type_ref": {
//                         |           "symbol": "local 1",
//                         |           "type_arguments": []
//                         |         }
//                         |       }
//                         |     }
//                         |   }
//                         | }
//                            ^ reference local 1
//                               ^ definition local 3
//                               info {
//                               |   "symbol": "local 3",
//                               |   "documentation": [
//                               |     "```ts\n(parameter) b: number\n```"
//                               |   ],
//                               |   "relationships": [],
//                               |   "kind": 37,
//                               |   "display_name": "b",
//                               |   "enclosing_symbol": "",
//                               |   "signature": {
//                               |     "value_signature": {
//                               |       "tpe": {
//                               |         "type_ref": {
//                               |           "symbol": "scip-typescript npm typescript . number#",
//                               |           "type_arguments": []
//                               |         }
//                               |       }
//                               |     }
//                               |   }
//                               | }
//                                                       ^ definition local 5
//                                                       info {
//                                                       |   "symbol": "local 5",
//                                                       |   "documentation": [
//                                                       |     "```ts\n(parameter) a: T\n```"
//                                                       |   ],
//                                                       |   "relationships": [],
//                                                       |   "kind": 37,
//                                                       |   "display_name": "a",
//                                                       |   "enclosing_symbol": "",
//                                                       |   "signature": {
//                                                       |     "value_signature": {}
//                                                       |   }
//                                                       | }
//                                                          ^ definition local 6
//                                                          info {
//                                                          |   "symbol": "local 6",
//                                                          |   "documentation": [
//                                                          |     "```ts\n(parameter) b: number\n```"
//                                                          |   ],
//                                                          |   "relationships": [],
//                                                          |   "kind": 37,
//                                                          |   "display_name": "b",
//                                                          |   "enclosing_symbol": "",
//                                                          |   "signature": {
//                                                          |     "value_signature": {}
//                                                          |   }
//                                                          | }
//                                                                   ^ reference local 5
//                                                                       ^ reference local 6

export interface User {
//               ^^^^ definition syntax 1.0.0 src/`signatures.ts`/User#
//               info {
//               |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/User#",
//               |   "documentation": [
//               |     "```ts\ninterface User\n```"
//               |   ],
//               |   "relationships": [],
//               |   "kind": 21,
//               |   "display_name": "User",
//               |   "enclosing_symbol": "",
//               |   "signature": {
//               |     "class_signature": {
//               |       "type_parameters": {
//               |         "symlinks": [],
//               |         "hardlinks": []
//               |       },
//               |       "parents": [],
//               |       "declarations": {
//               |         "symlinks": [
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/name0:",
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/age0:",
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/customHeaders0:"
//               |         ],
//               |         "hardlinks": []
//               |       }
//               |     }
//               |   }
//               | }
  name: string
//^^^^ definition syntax 1.0.0 src/`signatures.ts`/name0:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/name0:",
// |   "documentation": [
// |     "```ts\n(property) name: string\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "name",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . string#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
  age: number
//^^^ definition syntax 1.0.0 src/`signatures.ts`/age0:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/age0:",
// |   "documentation": [
// |     "```ts\n(property) age: number\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "age",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . number#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
  customHeaders: Record<string, string>
//^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/customHeaders0:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/customHeaders0:",
// |   "documentation": [
// |     "```ts\n(property) customHeaders: Record<string, string>\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "customHeaders",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript 5.3.3 lib/`lib.es5.d.ts`/Record#",
// |           "type_arguments": [
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . string#",
// |                 "type_arguments": []
// |               }
// |             },
// |             {
// |               "type_ref": {
// |                 "symbol": "scip-typescript npm typescript . string#",
// |                 "type_arguments": []
// |               }
// |             }
// |           ]
// |         }
// |       }
// |     }
// |   }
// | }
//               ^^^^^^ reference typescript 5.3.3 lib/`lib.es5.d.ts`/Record#
}

export interface ChatHistory {
//               ^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/ChatHistory#
//               info {
//               |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ChatHistory#",
//               |   "documentation": [
//               |     "```ts\ninterface ChatHistory\n```"
//               |   ],
//               |   "relationships": [],
//               |   "kind": 21,
//               |   "display_name": "ChatHistory",
//               |   "enclosing_symbol": "",
//               |   "signature": {
//               |     "class_signature": {
//               |       "type_parameters": {
//               |         "symlinks": [],
//               |         "hardlinks": []
//               |       },
//               |       "parents": [],
//               |       "declarations": {
//               |         "symlinks": [
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/chatID0:",
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/indexedSignature0:(a)",
//               |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/indexedSignature1:(_)"
//               |         ],
//               |         "hardlinks": []
//               |       }
//               |     }
//               |   }
//               | }
  chatID: User
//^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/chatID0:
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/chatID0:",
// |   "documentation": [
// |     "```ts\n(property) chatID: User\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "chatID",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/User#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
//        ^^^^ reference syntax 1.0.0 src/`signatures.ts`/User#
  [a: number]: User
// ^ definition syntax 1.0.0 src/`signatures.ts`/indexedSignature0:(a)
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/indexedSignature0:(a)",
// |   "documentation": [
// |     "```ts\n(parameter) a: number\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 37,
// |   "display_name": "a",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . number#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
//             ^^^^ reference syntax 1.0.0 src/`signatures.ts`/User#
  [_: string]: User
// ^ definition syntax 1.0.0 src/`signatures.ts`/indexedSignature1:(_)
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/indexedSignature1:(_)",
// |   "documentation": [
// |     "```ts\n(parameter) _: string\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 37,
// |   "display_name": "_",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . string#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
//             ^^^^ reference syntax 1.0.0 src/`signatures.ts`/User#
}

export class ModelProvider {
//           ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/ModelProvider#
//           info {
//           |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ModelProvider#",
//           |   "documentation": [
//           |     "```ts\nclass ModelProvider\n```"
//           |   ],
//           |   "relationships": [],
//           |   "kind": 7,
//           |   "display_name": "ModelProvider",
//           |   "enclosing_symbol": "",
//           |   "signature": {
//           |     "class_signature": {
//           |       "type_parameters": {
//           |         "symlinks": [],
//           |         "hardlinks": []
//           |       },
//           |       "parents": [],
//           |       "declarations": {
//           |         "symlinks": [
//           |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ModelProvider#default."
//           |         ],
//           |         "hardlinks": []
//           |       }
//           |     }
//           |   }
//           | }
  default = true
//^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/ModelProvider#default.
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/ModelProvider#default.",
// |   "documentation": [
// |     "```ts\n(property) default: boolean\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 41,
// |   "display_name": "default",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . true#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
}

export enum NumericLiteralEnum {
//          ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#
//          info {
//          |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#",
//          |   "documentation": [
//          |     "```ts\nenum NumericLiteralEnum\n```"
//          |   ],
//          |   "relationships": [],
//          |   "kind": 11,
//          |   "display_name": "NumericLiteralEnum",
//          |   "enclosing_symbol": "",
//          |   "signature": {
//          |     "class_signature": {
//          |       "parents": [],
//          |       "declarations": {
//          |         "symlinks": [
//          |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#MinusOne.",
//          |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#Expression.",
//          |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#One.",
//          |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#TwoThousand."
//          |         ],
//          |         "hardlinks": []
//          |       }
//          |     }
//          |   }
//          | }
  MinusOne = -1,
//^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#MinusOne.
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#MinusOne.",
// |   "documentation": [
// |     "```ts\n(enum member) MinusOne = -1\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 12,
// |   "display_name": "MinusOne",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "constant_type": {
// |           "constant": {
// |             "int_constant": {
// |               "value": -1
// |             }
// |           }
// |         }
// |       }
// |     }
// |   }
// | }
  Expression = 1 + 23 - 2,
//^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#Expression.
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#Expression.",
// |   "documentation": [
// |     "```ts\n(enum member) Expression = 22\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 12,
// |   "display_name": "Expression",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "type_ref": {
// |           "symbol": "scip-typescript npm typescript . number#",
// |           "type_arguments": []
// |         }
// |       }
// |     }
// |   }
// | }
  One = 1,
//^^^ definition syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#One.
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#One.",
// |   "documentation": [
// |     "```ts\n(enum member) One = 1\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 12,
// |   "display_name": "One",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "constant_type": {
// |           "constant": {
// |             "int_constant": {
// |               "value": 1
// |             }
// |           }
// |         }
// |       }
// |     }
// |   }
// | }
  TwoThousand = 2_000,
//^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#TwoThousand.
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/NumericLiteralEnum#TwoThousand.",
// |   "documentation": [
// |     "```ts\n(enum member) TwoThousand = 2000\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 12,
// |   "display_name": "TwoThousand",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "constant_type": {
// |           "constant": {
// |             "int_constant": {
// |               "value": 2000
// |             }
// |           }
// |         }
// |       }
// |     }
// |   }
// | }
}

export const doubleConstant = 3.14
//           ^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/doubleConstant.
//           info {
//           |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/doubleConstant.",
//           |   "documentation": [
//           |     "```ts\nvar doubleConstant: 3.14\n```"
//           |   ],
//           |   "relationships": [],
//           |   "kind": 61,
//           |   "display_name": "doubleConstant",
//           |   "enclosing_symbol": "",
//           |   "signature": {
//           |     "value_signature": {
//           |       "tpe": {
//           |         "constant_type": {
//           |           "constant": {
//           |             "double_constant": {
//           |               "value": 3.14
//           |             }
//           |           }
//           |         }
//           |       }
//           |     }
//           |   }
//           | }

export enum StringLiteralEnum {
//          ^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/StringLiteralEnum#
//          info {
//          |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/StringLiteralEnum#",
//          |   "documentation": [
//          |     "```ts\nenum StringLiteralEnum\n```"
//          |   ],
//          |   "relationships": [],
//          |   "kind": 11,
//          |   "display_name": "StringLiteralEnum",
//          |   "enclosing_symbol": "",
//          |   "signature": {
//          |     "class_signature": {
//          |       "parents": [],
//          |       "declarations": {
//          |         "symlinks": [
//          |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/StringLiteralEnum#Saturday.",
//          |           "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/StringLiteralEnum#Sunday."
//          |         ],
//          |         "hardlinks": []
//          |       }
//          |     }
//          |   }
//          | }
  Saturday = 'saturday',
//^^^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/StringLiteralEnum#Saturday.
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/StringLiteralEnum#Saturday.",
// |   "documentation": [
// |     "```ts\n(enum member) Saturday = saturday\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 12,
// |   "display_name": "Saturday",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "constant_type": {
// |           "constant": {
// |             "string_constant": {
// |               "value": "saturday"
// |             }
// |           }
// |         }
// |       }
// |     }
// |   }
// | }
  Sunday = 'sunday',
//^^^^^^ definition syntax 1.0.0 src/`signatures.ts`/StringLiteralEnum#Sunday.
// info {
// |   "symbol": "scip-typescript npm syntax 1.0.0 src/`signatures.ts`/StringLiteralEnum#Sunday.",
// |   "documentation": [
// |     "```ts\n(enum member) Sunday = sunday\n```"
// |   ],
// |   "relationships": [],
// |   "kind": 12,
// |   "display_name": "Sunday",
// |   "enclosing_symbol": "",
// |   "signature": {
// |     "value_signature": {
// |       "tpe": {
// |         "constant_type": {
// |           "constant": {
// |             "string_constant": {
// |               "value": "sunday"
// |             }
// |           }
// |         }
// |       }
// |     }
// |   }
// | }
}

