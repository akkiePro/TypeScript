// 1. intro
let score: number | string = 33;
score = 44; // allowed
score = "44";   // allowed

// 2. use-case
type User = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}

let akash: User | Admin = {name: "akash", id: 123};
// after sometime realised, akash has characteristics of Admin as well.
akash = {username: "akki", id: 123};    // no issue. totally fine.

// 3. another example
let shruti: User;
shruti = {username: "zingur", id: 1812};    // compile-error in username. bcz username is a property of Admin and shruti is just a User.

// 4. demo
function increment(id: number | string): number {
    if (typeof id === "string") {
        id = Number.parseInt(id);
        return id + 1;
    } else
        return id + 1;
}
console.log(increment(25));     // 26
console.log(increment("21"));   // 22. not a 211.

// 5. with array
// i. Array of numbers
const data1: number[] = [1, 2, 3];
// ii. Array of strings
const data2: string[] = ["1", "2", "3"];
// iii. Array of combined number or string
const data3: (string | number)[] = [1, 2, 3, "4", "5"];
// iv. rookie mistake:
let data4: string[] | number[] = [1, 2, 3];   // this means either all the elements should be number or all the elements should be string
data4 = ["1", "2", "3"];    // allowed
data4 = [1, 2, 3, "4", "5"];    // compile-error. bcz, either all the elements should be number or all the elements should be string

// 6. application
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";    // no issue here.
seatAllotment = "crew";     // compile-error. Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.

export {}