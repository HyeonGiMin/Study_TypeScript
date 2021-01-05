"use strict";
exports.__esModule = true;
var makeRandoNumber_1 = require("../utils/makeRandoNumber");
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (age === void 0) { age = makeRandoNumber_1.makeRandomNumber(); }
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports["default"] = Person;
exports.makePerson = function (name, age) {
    if (age === void 0) { age = makeRandoNumber_1.makeRandomNumber(); }
    return ({ name: name, age: age });
};
