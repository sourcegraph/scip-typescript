export function Connection() {}

Connection.prototype = {
  getSchemaVersion() {
    return 0
  },
  getVersion: function () {
    return 1
  },
  version: 1,
}
