export function Connection() {}

Connection.prototype = {
  getSchemaVersion() {
    return 0
  },
  getVersion: function () {
    return 1
  },
  version: 1,
  'schema-version': 2,
  ['computed-version']: 3,
}

// Different spellings of the same property must share one symbol.
Connection.prototype['schema-version'] = 4
Object.defineProperty(Connection.prototype, 'schema-version', {
  value: 5,
  writable: true,
})
Connection.prototype['computed-version'] = 6

export function DirectConnection() {}

DirectConnection.prototype.getVersion = function () {
  return 2
}
DirectConnection.prototype.version = 2

function getSchemaVersion() {
  return 3
}
DirectConnection.prototype['getSchemaVersion'] = getSchemaVersion
DirectConnection.prototype['schema-version'] = 3

// Reads and compound writes are references, not member declarations.
DirectConnection.prototype['version'] += 1
DirectConnection.prototype['getSchemaVersion']()

export function BracketConnection() {}

BracketConnection['prototype'] = {
  getSchemaVersion() {
    return 4
  },
  getVersion: function () {
    return 4
  },
  version: 4,
}

export function MixedConnection() {}

MixedConnection['prototype'].getVersion = getSchemaVersion
MixedConnection['prototype']['version'] = 5

export function DefinedConnection() {}

Object.defineProperty(DefinedConnection.prototype, 'getVersion', {
  value: getSchemaVersion,
})
Object.defineProperty(DefinedConnection['prototype'], 'version', {
  value: 14,
  writable: true,
})
Object.defineProperty(DefinedConnection.prototype, 'schema-version', {
  get() {
    return 15
  },
})

let currentVersion = 16
Object.defineProperty(DefinedConnection.prototype, 'currentVersion', {
  get() {
    return currentVersion
  },
  set(value) {
    currentVersion = value
  },
})

// A shadowed Object must not introduce a prototype member definition.
/** @param {{ defineProperty: Function }} Object */
export function shadowObject(Object) {
  function ShadowedConnection() {}
  Object.defineProperty(ShadowedConnection.prototype, 'notAMember', {
    value: 17,
  })
}

// Ordinary writes must remain references, not new prototype definitions.
export function updateOrdinary(ordinary = { version: 6 }) {
  ordinary.version = 7
  ordinary['version'] = 8
  Object.defineProperty(ordinary, 'version', { value: 9 })
}

// Members of local constructors must keep valid local symbols.
export function localVersion() {
  function LocalConnection() {}
  LocalConnection.prototype['version'] = 11

  function LocalReplacement() {}
  LocalReplacement['prototype'] = { version: 12 }

  function LocalDefined() {}
  Object.defineProperty(LocalDefined.prototype, 'version', { value: 18 })
  return [
    new LocalConnection().version,
    new LocalReplacement().version,
    new LocalDefined().version,
  ]
}
