"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function makePromise(x) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(x * 3);
    }, 100);
  });
}

exports["default"] = function callee$0$0(x) {
  var result;
  return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return regeneratorRuntime.awrap(makePromise(x));

      case 2:
        result = context$1$0.sent;
        return context$1$0.abrupt("return", result);

      case 4:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

module.exports = exports["default"];
//# sourceMappingURL=./external.js.map
