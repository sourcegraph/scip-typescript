/** @import { Connection } from './connection.mjs' */

/** @param {Connection} connection */
export function schemaVersion(connection) {
  return connection.getSchemaVersion()
}
