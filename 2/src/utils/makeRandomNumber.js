"use strict";
exports.__esModule = true;
var MAX_AGE = 100;
function makeRandomNumber(max) {
    if (max === void 0) { max = MAX_AGE; }
    return Math.ceil((Math.random() * max));
}
exports["default"] = makeRandomNumber;
