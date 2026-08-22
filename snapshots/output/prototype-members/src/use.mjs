// language JavaScript
// < definition prototype-members 1.0.0 src/`use.mjs`/

/** @import { Connection } from './connection.mjs' */

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
  ]
}

