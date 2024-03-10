"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. pass object as param
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Akash", isPaid: true });
// 2. set object as return type
function createCourse() {
    return { name: "Akash", course_name: "TS", price: 200 }; // throws compile-error because price was not asked for returning
}
createCourse();
// but this is allowed
function createCourse1() {
    var param = { name: "Akash", course_name: "TS", price: 200 };
    return param;
}
console.log(createCourse1());
// 3. problem with object in param for default value
function createCourse2(_a) {
    var  = _a.name,  = _a["Akash"],  = _a.course_name,  = _a["TS"],  = _a.price,  = _a[200];
} // compile-time error. Not allowed behavior for default values of objects
// solution
var param = { name: "Akash", course_name: "TS", price: 200 };
function createCourse3(param) { }
