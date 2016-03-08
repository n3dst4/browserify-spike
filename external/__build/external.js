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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leHRlcm5hbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVMsV0FBVyxDQUFFLENBQUMsRUFBRTtBQUN2QixTQUFPLElBQUksT0FBTyxDQUFFLFVBQVUsT0FBTyxFQUFFO0FBQ3JDLGNBQVUsQ0FBQyxZQUFZO0FBQ3JCLGFBQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7S0FDZixFQUFFLEdBQUcsQ0FBQyxDQUFBO0dBQ1IsQ0FBQyxDQUFBO0NBQ0g7O3FCQUVjLG9CQUFnQixDQUFDO01BQ3hCLE1BQU07Ozs7O3dDQUFTLFdBQVcsQ0FBQyxDQUFDLENBQUM7OztBQUE3QixjQUFNOzRDQUNMLE1BQU07Ozs7Ozs7Q0FDZCIsImZpbGUiOiJleHRlcm5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1ha2VQcm9taXNlICh4KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSAoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc29sdmUoeCAqIDMpXG4gICAgfSwgMTAwKVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAoeCkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtYWtlUHJvbWlzZSh4KVxuICByZXR1cm4gcmVzdWx0XG59XG4iXX0=