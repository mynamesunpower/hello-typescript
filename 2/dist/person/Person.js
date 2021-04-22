"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
var makeRandomNumber_1 = __importDefault(require("../utils/makeRandomNumber"));
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (age === void 0) { age = makeRandomNumber_1.default(); }
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports.default = Person;
var makePerson = function (name, age) {
    if (age === void 0) { age = makeRandomNumber_1.default(); }
    return ({ name: name, age: age });
};
exports.makePerson = makePerson;
//# sourceMappingURL=Person.js.map