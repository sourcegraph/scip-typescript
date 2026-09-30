/** @import { Connection, DirectConnection, BracketConnection, MixedConnection, DefinedConnection } from './connection.mjs' */

/** @param {Connection} connection */
export function schemaVersion(connection) {
  return [
    connection.getSchemaVersion(),
    connection.getVersion(),
    connection.version,
    connection['schema-version'],
    connection['computed-version'],
  ]
}

/** @param {DirectConnection} connection */
export function directVersion(connection) {
  return [
    connection.getVersion(),
    connection['getVersion'](),
    connection.version,
    connection['version'],
    connection.getSchemaVersion(),
    connection['getSchemaVersion'](),
    connection['schema-version'],
  ]
}

/** @param {BracketConnection} connection */
export function bracketVersion(connection) {
  return [
    connection.getSchemaVersion(),
    connection.getVersion(),
    connection.version,
  ]
}

/** @param {MixedConnection} connection */
export function mixedVersion(connection) {
  return [connection.getVersion(), connection.version]
}

/** @param {DefinedConnection} connection */
export function definedVersion(connection) {
  connection.currentVersion = 19
  return [
    connection.getVersion(),
    connection['getVersion'](),
    connection.version,
    connection['schema-version'],
    connection.currentVersion,
  ]
}

/** @param {DirectConnection} connection */
export function updateVersion(connection) {
  connection.version = 9
  connection['version'] = 10
  connection.version += 1
  return connection.version
}
