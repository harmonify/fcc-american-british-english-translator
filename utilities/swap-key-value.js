"use strict";

module.exports = function swapKeyValue(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
};
