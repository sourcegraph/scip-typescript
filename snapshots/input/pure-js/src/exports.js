exports.SomeExportedClass = class LocalClassName {
  method() {}
}

module.exports.SomeAnonymousClass = class /*anonymous*/ {
  method() {}
}

exports.someFunc = function localFuncName() {}
exports.someAnonymousFunc = function () /*anonymous*/ {}

exports.someArrowFunc = () => {}

exports.someValue = 4
