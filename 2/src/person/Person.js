"use strict";
exports.__esModule = true;
exports.makePerson = void 0;
var makeRandomNumber_1 = require("../utils/makeRandomNumber");
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (age === void 0) { age = makeRandomNumber_1["default"](); }
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports["default"] = Person;
var makePerson = function (name, age) {
    if (age === void 0) { age = makeRandomNumber_1["default"](); }
    return ({ name: name, age: age });
};
exports.makePerson = makePerson;
