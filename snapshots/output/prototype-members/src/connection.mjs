// language JavaScript
// < definition prototype-members 1.0.0 src/`connection.mjs`/

export function Connection() {}
//              ^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/Connection().

Connection.prototype = {
//^^^^^^^^^ reference prototype-members 1.0.0 src/`connection.mjs`/Connection().
//^^^^^^^^^ reference local 3
//         ^^^^^^^^^ reference local 2
  getSchemaVersion() {
//^^^^^^^^^^^^^^^^ definition prototype-members 1.0.0 src/`connection.mjs`/Connection().getSchemaVersion().
    return 0
  },
}

