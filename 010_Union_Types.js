"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. intro
var score = 33;
score = 44; // allowed
score = "44"; // allowed
var akash = { name: "akash", id: 123 };
// after sometime realised, akash has characteristics of Admin as well.
akash = { username: "akki", id: 123 }; // no issue. totally fine.
// 3. another example
var shruti;
shruti = { username: "zingur", id: 1812 }; // compile-error in username. bcz username is a property of Admin and shruti is just a User.
// 4. demo
function increment(id) {
    if (typeof id === "string") {
        id = Number.parseInt(id);
        return id + 1;
    }
    else
        return id + 1;
}
console.log(increment(25)); // 26
console.log(increment("21")); // 22. not a 211.
// 5. with array
// i. Array of numbers
var data1 = [1, 2, 3];
// ii. Array of strings
var data2 = ["1", "2", "3"];
// iii. Array of combined number or string
var data3 = [1, 2, 3, "4", "5"];
// iv. rookie mistake:
var data4 = [1, 2, 3]; // this means either all the elements should be number or all the elements should be string
data4 = ["1", "2", "3"]; // allowed
data4 = [1, 2, 3, "4", "5"]; // compile-error. bcz, either all the elements should be number or all the elements should be string
// 6. application
var seatAllotment;
seatAllotment = "aisle"; // no issue here.
seatAllotment = "crew"; // compile-error. Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.
