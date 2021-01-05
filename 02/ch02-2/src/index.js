"use strict";
exports.__esModule = true;
var Pserson_1 = require("./Person/Pserson");
var chance_1 = require("chance");
var R = require("ramda");
var chance = new chance_1["default"]();
var persons = R.range(0, 2).map(function (n) { return new Pserson_1["default"](chance.name(), chance.age()); });
console.log(persons);
// const testMakePerson=():void=>{
//     let jane:IPerson=makePerson('Jane')
//     let jack:IPerson=makePerson('Jack')
//     console.log(jane,jack)
// }
// testMakePerson()
