"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. tuple intro: we can restrict that first element of an array should be string, second should be number and third should be boolean.
var tUser;
tUser = [true, 123, "akki"]; // compile-error. order must remain as per declaration
tUser = ["akki", 123, true]; // allowed
/**
 * application:
 * used in API calling because data must be in order while calling APIs.
 */
// 2. we can restrict size as well
var rgb = [255, 0.31, 112]; // allowed
rgb = [255, 255, 112, 0.5]; // compile-error. Type '[number, number, number, number]' is not assignable to type '[number, number, number]'. Source has 4 element(s) but target allows only 3.
var newUser = [112, "akki@dev.com"];
newUser[1] = "akki@gmail.com"; // it's allowed to update data
// 4. controversial about tuple
newUser.push(true); // here it showed compile-error. but in some typescript versions, it allows which is ambiguious.
