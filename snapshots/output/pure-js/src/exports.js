// < definition pure-js 1.0.0 src/`exports.js`/

exports.SomeExportedClass = class LocalClassName {
//      ^^^^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`exports.js`/exports.SomeExportedClass#
//                                ^^^^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.SomeExportedClass#
  method() {}
//^^^^^^ definition pure-js 1.0.0 src/`exports.js`/exports.SomeExportedClass#method().
}

module.exports.SomeAnonymousClass = class /*anonymous*/ {
//^^^^ reference local 1
//             ^^^^^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`exports.js`/exports.SomeAnonymousClass#
  method() {}
//^^^^^^ definition pure-js 1.0.0 src/`exports.js`/exports.SomeAnonymousClass#method().
}

exports.someFunc = function localFuncName() {}
//      ^^^^^^^^ definition pure-js 1.0.0 src/`exports.js`/exports.someFunc.
//                          ^^^^^^^^^^^^^ reference pure-js 1.0.0 src/`exports.js`/exports.someFunc.
exports.someAnonymousFunc = function () /*anonymous*/ {}
//      ^^^^^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`exports.js`/exports.someAnonymousFunc.

exports.someArrowFunc = () => {}
//      ^^^^^^^^^^^^^ definition pure-js 1.0.0 src/`exports.js`/exports.someArrowFunc.

exports.someValue = 4
//      ^^^^^^^^^ definition pure-js 1.0.0 src/`exports.js`/exports.someValue.

