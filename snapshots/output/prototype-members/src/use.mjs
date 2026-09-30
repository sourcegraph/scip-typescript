// language JavaScript
// < definition prototype-members 1.0.0 src/`use.mjs`/

/** @import { Connection, DirectConnection, BracketConnection, MixedConnection, DefinedConnection } from './connection.mjs' */

/** @param {Connection} connection */
export function schemaVersion(connection) {
//              ^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/schemaVersion().
//                            ^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/schemaVersion().(connection)
  return [
    connection.getSchemaVersion(),
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/schemaVersion().(connection)
//             ^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().getSchemaVersion().
    connection.getVersion(),
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/schemaVersion().(connection)
//             ^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().getVersion.
    connection.version,
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/schemaVersion().(connection)
//             ^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().version.
    connection['schema-version'],
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/schemaVersion().(connection)
//             ^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().schema-version.
    connection['computed-version'],
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/schemaVersion().(connection)
//             ^^^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().computed-version.
  ]
}

/** @param {DirectConnection} connection */
export function directVersion(connection) {
//              ^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/directVersion().
//                            ^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/directVersion().(connection)
  return [
    connection.getVersion(),
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/directVersion().(connection)
//             ^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().getVersion.
    connection['getVersion'](),
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/directVersion().(connection)
//             ^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().getVersion.
    connection.version,
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/directVersion().(connection)
//             ^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().version.
    connection['version'],
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/directVersion().(connection)
//             ^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().version.
    connection.getSchemaVersion(),
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/directVersion().(connection)
//             ^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().getSchemaVersion.
    connection['getSchemaVersion'](),
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/directVersion().(connection)
//             ^^^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().getSchemaVersion.
    connection['schema-version'],
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/directVersion().(connection)
//             ^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().schema-version.
  ]
}

/** @param {BracketConnection} connection */
export function bracketVersion(connection) {
//              ^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/bracketVersion().
//                             ^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/bracketVersion().(connection)
  return [
    connection.getSchemaVersion(),
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/bracketVersion().(connection)
//             ^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/BracketConnection().getSchemaVersion().
    connection.getVersion(),
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/bracketVersion().(connection)
//             ^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/BracketConnection().getVersion.
    connection.version,
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/bracketVersion().(connection)
//             ^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/BracketConnection().version.
  ]
}

/** @param {MixedConnection} connection */
export function mixedVersion(connection) {
//              ^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/mixedVersion().
//                           ^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/mixedVersion().(connection)
  return [connection.getVersion(), connection.version]
//        ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/mixedVersion().(connection)
//                   ^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/MixedConnection().getVersion.
//                                 ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/mixedVersion().(connection)
//                                            ^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/MixedConnection().version.
}

/** @param {DefinedConnection} connection */
export function definedVersion(connection) {
//              ^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/definedVersion().
//                             ^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/definedVersion().(connection)
  connection.currentVersion = 19
//^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/definedVersion().(connection)
//           ^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().currentVersion.
  return [
    connection.getVersion(),
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/definedVersion().(connection)
//             ^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().getVersion.
    connection['getVersion'](),
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/definedVersion().(connection)
//             ^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().getVersion.
    connection.version,
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/definedVersion().(connection)
//             ^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().version.
    connection['schema-version'],
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/definedVersion().(connection)
//             ^^^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().schema-version.
    connection.currentVersion,
//  ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/definedVersion().(connection)
//             ^^^^^^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DefinedConnection().currentVersion.
  ]
}

/** @param {DirectConnection} connection */
export function updateVersion(connection) {
//              ^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/updateVersion().
//                            ^^^^^^^^^^ definition prototype-members 1.0.0 src/`use.mjs`/updateVersion().(connection)
  connection.version = 9
//^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/updateVersion().(connection)
//           ^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().version.
  connection['version'] = 10
//^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/updateVersion().(connection)
//           ^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().version.
  connection.version += 1
//^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/updateVersion().(connection)
//           ^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().version.
  return connection.version
//       ^^^^^^^^^^ reference prototype-members 1.0.0 src/`use.mjs`/updateVersion().(connection)
//                  ^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/DirectConnection().version.
}

