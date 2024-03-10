"use strict";
// 1. problem
console.log(typeof "xyz"); // string
console.log(typeof 12); // number
console.log(typeof [1, 2, 3]); // object. not specific. it's an Array
console.log(typeof null); // object. not specific.
// 2. solution
function detectType(val) {
    if (typeof val === "string")
        return val.toLowerCase();
    else if (typeof val === "number")
        return val + 23;
    val.push(27);
    return val;
}
// 3. better solution
function provideId(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
    console.log(id.toLowerCase());
}
// 4. another example
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs)
                console.log(s);
        }
        else if (typeof strs === "string")
            console.log(strs);
    }
}
