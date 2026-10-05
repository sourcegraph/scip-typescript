// language JavaScript
// < definition prototype-members 1.0.0 src/`connection.mjs`/

export function Connection() {}
//              ^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/Connection().

Connection.prototype = {
//^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().
//         ^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().
  getSchemaVersion() {
//^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/Connection().getSchemaVersion().
    return 0
  },
  getVersion: function () {
//^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/Connection().getVersion.
    return 1
  },
  version: 1,
//^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/Connection().version.
  'schema-version': 2,
//^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/Connection().schema-version.
  ['computed-version']: 3,
// ^^^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().computed-version.
}

// Different spellings of the same property must share one symbol.
Connection.prototype['schema-version'] = 4
//^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().
//         ^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().
//                   ^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/Connection().schema-version.
Object.defineProperty(Connection.prototype, 'schema-version', {
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object#
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object.
//     ^^^^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/ObjectConstructor#defineProperty().
//                    ^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().
//                               ^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().
//                                          ^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/Connection().schema-version.
  value: 5,
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/PropertyDescriptor#value.
  writable: true,
//^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/PropertyDescriptor#writable.
})
Connection.prototype['computed-version'] = 6
//^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().
//         ^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().
//                   ^^^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/Connection().computed-version.

export function DirectConnection() {}
//              ^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().

DirectConnection.prototype.getVersion = function () {
//^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().
//               ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                         ^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().getVersion.
  return 2
}
DirectConnection.prototype.version = 2
//^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().
//               ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                         ^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().version.

function getSchemaVersion() {
//       ^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/getSchemaVersion().
  return 3
}
DirectConnection.prototype['getSchemaVersion'] = getSchemaVersion
//^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().
//               ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                         ^^^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().getSchemaVersion.
//                                               ^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/getSchemaVersion().
DirectConnection.prototype['schema-version'] = 3
//^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().
//               ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                         ^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().schema-version.

// Reads and compound writes are references, not member declarations.
DirectConnection.prototype['version'] += 1
//^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().
//               ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                         ^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().version.
DirectConnection.prototype['getSchemaVersion']()
//^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().
//               ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                         ^^^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().getSchemaVersion.

export function BracketConnection() {}
//              ^^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/BracketConnection().

BracketConnection['prototype'] = {
//^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/BracketConnection().
//                ^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/BracketConnection().
  getSchemaVersion() {
//^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/BracketConnection().getSchemaVersion().
    return 4
  },
  getVersion: function () {
//^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/BracketConnection().getVersion.
    return 4
  },
  version: 4,
//^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/BracketConnection().version.
}

export function MixedConnection() {}
//              ^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/MixedConnection().

MixedConnection['prototype'].getVersion = getSchemaVersion
//^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/MixedConnection().
//              ^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                           ^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/MixedConnection().getVersion.
//                                        ^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/getSchemaVersion().
MixedConnection['prototype']['version'] = 5
//^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/MixedConnection().
//              ^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                           ^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/MixedConnection().version.

export function DefinedConnection() {}
//              ^^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().

Object.defineProperty(DefinedConnection.prototype, 'getVersion', {
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object#
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object.
//     ^^^^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/ObjectConstructor#defineProperty().
//                    ^^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().
//                                      ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                                                 ^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().getVersion.
  value: getSchemaVersion,
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/PropertyDescriptor#value.
//       ^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/getSchemaVersion().
})
Object.defineProperty(DefinedConnection['prototype'], 'version', {
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object#
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object.
//     ^^^^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/ObjectConstructor#defineProperty().
//                    ^^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().
//                                      ^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                                                    ^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().version.
  value: 14,
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/PropertyDescriptor#value.
  writable: true,
//^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/PropertyDescriptor#writable.
})
Object.defineProperty(DefinedConnection.prototype, 'schema-version', {
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object#
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object.
//     ^^^^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/ObjectConstructor#defineProperty().
//                    ^^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().
//                                      ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                                                 ^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().schema-version.
  get() {
//^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/PropertyDescriptor#get().
    return 15
  },
})

let currentVersion = 16
//  ^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/currentVersion.
Object.defineProperty(DefinedConnection.prototype, 'currentVersion', {
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object#
//^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object.
//     ^^^^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/ObjectConstructor#defineProperty().
//                    ^^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().
//                                      ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                                                 ^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().currentVersion.
  get() {
//^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/PropertyDescriptor#get().
    return currentVersion
//         ^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/currentVersion.
  },
  set(value) {
//^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/PropertyDescriptor#set().
//    ^^^^^ definition local 2
    currentVersion = value
//  ^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/currentVersion.
//                   ^^^^^ reference local 2
  },
})

// A shadowed Object must not introduce a prototype member definition.
/** @param {{ defineProperty: Function }} Object */
export function shadowObject(Object) {
//              ^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/shadowObject().
//                           ^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/shadowObject().(Object)
  function ShadowedConnection() {}
//         ^^^^^^^^^^^^^^^^^^ definition local 3
  Object.defineProperty(ShadowedConnection.prototype, 'notAMember', {
//^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/shadowObject().(Object)
//       ^^^^^^^^^^^^^^ reference local 8
//                      ^^^^^^^^^^^^^^^^^^ reference local 3
//                                         ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                                                    ^^^^^^^^^^^^ reference local 10
    value: 17,
//  ^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/value0:
  })
}

// Ordinary writes must remain references, not new prototype definitions.
export function updateOrdinary(ordinary = { version: 6 }) {
//              ^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/updateOrdinary().
//                             ^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/updateOrdinary().(ordinary)
//                                          ^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/version0:
  ordinary.version = 7
//^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/updateOrdinary().(ordinary)
//         ^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/version0:
  ordinary['version'] = 8
//^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/updateOrdinary().(ordinary)
//         ^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/version0:
  Object.defineProperty(ordinary, 'version', { value: 9 })
//^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object#
//^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object.
//       ^^^^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/ObjectConstructor#defineProperty().
//                      ^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/updateOrdinary().(ordinary)
//                                             ^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/PropertyDescriptor#value.
}

// Members of local constructors must keep valid local symbols.
export function localVersion() {
//              ^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/localVersion().
  function LocalConnection() {}
//         ^^^^^^^^^^^^^^^ definition local 11
  LocalConnection.prototype['version'] = 11
//^^^^^^^^^^^^^^^ reference local 11
//                ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                          ^^^^^^^^^ definition local 12

  function LocalReplacement() {}
//         ^^^^^^^^^^^^^^^^ definition local 13
  LocalReplacement['prototype'] = { version: 12 }
//^^^^^^^^^^^^^^^^ reference local 13
//                 ^^^^^^^^^^^ reference local 13
//                                  ^^^^^^^ definition local 14

  function LocalDefined() {}
//         ^^^^^^^^^^^^ definition local 15
  Object.defineProperty(LocalDefined.prototype, 'version', { value: 18 })
//^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object#
//^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Object.
//       ^^^^^^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/ObjectConstructor#defineProperty().
//                      ^^^^^^^^^^^^ reference local 15
//                                   ^^^^^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/Function#prototype.
//                                              ^^^^^^^^^ definition local 16
//                                                           ^^^^^ reference typescript 6.0.3 lib/`lib.es5.d.ts`/PropertyDescriptor#value.
  return [
    new LocalConnection().version,
//      ^^^^^^^^^^^^^^^ reference local 11
//                        ^^^^^^^ reference local 12
    new LocalReplacement().version,
//      ^^^^^^^^^^^^^^^^ reference local 13
//                         ^^^^^^^ reference local 14
    new LocalDefined().version,
//      ^^^^^^^^^^^^ reference local 15
//                     ^^^^^^^ reference local 16
  ]
}

