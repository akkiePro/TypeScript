"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Student = class Student {
    constructor(name, _id) {
        this.name = name;
        this._id = _id;
    }
    displayPerson() {
        console.log(this.name);
    }
};
Student = __decorate([
    Component("This is use case of factory. you can pass customised msgs...")
], Student);
// compile this file: tsc decorator_factories.ts
// run decorator_factories.html