// string
let greetings: string = "Hello Akash";
greetings = 2;   // not allowed and compile time error
greetings = true;   // not allowed and compile time error
greetings = "Hello World";
greetings.toLowerCase();    // after writing greetings., you can find suggsted method for string
console.log(greetings);

// number
let myNum = 6;
myNum.toLowercase();    // compile-time error for number

let userId: number = 334455.2;  // we can't differentiate float and int in TS. bcz, everything is number.
console.log(userId.toFixed());

// boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn.valueOf);

export {}