"use strict";
// Aam Zindagi
/* class Person1 {
    
    constructor(
        public name: string,
        public _id: number
    ) {}

    displayPerson(): void {
        console.log(this.name);
    }

}

const newPerson1 = new Person1("Akash", 123);
newPerson1.displayPerson(); */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorator zindagi
let Person = class Person {
    constructor(name, _id) {
        this.name = name;
        this._id = _id;
    }
    displayPerson() {
        console.log(this.name);
    }
};
Person = __decorate([
    Logger
], Person);
// without creating object
function Logger(constructor) {
    console.log("Welcome to decorators...");
    console.log(constructor);
}
