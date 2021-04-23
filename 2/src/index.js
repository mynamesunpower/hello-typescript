"use strict";
exports.__esModule = true;
var Person_1 = require("./person/Person");
var chance_1 = require("chance");
var R = require("ramda");
var chance = new chance_1["default"]();
var persons = R.range(0, 2)
    .map(function (n) { return new Person_1["default"](chance.name(), chance.age()); });
console.log(persons);
var name = '태양';
var age = 32;
console.log("\uC81C \uC774\uB984\uC740 " + name + "\uC774\uACE0 " + age + "\uC138 \uC785\uB2C8\uB2E4.");
var man = {
    name: "jack",
    age: 32
};
man.name;
