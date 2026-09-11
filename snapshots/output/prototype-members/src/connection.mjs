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
}

