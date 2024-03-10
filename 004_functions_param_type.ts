// 1.
// problem
// example 1
function increment(num) {
    num.toLowerCase();  // allowed and bad behavior
    return num + 1;
}
increment(25);  // allowed
increment("Hi") // allowed and bad behavior

// solution
function incrementBy2(num: number) {
    // num.toLowerCase();  // not allowed and compile-error
    return num + 2;
}
incrementBy2(23);
// incrementBy2("Hello");  // not allowed and compile-error


// problem
// example 2
function isPrimeUser(email, username, hasPaid) {
    const isMember = hasPaid ? "a member" : "not a member";
    console.log(`${username} is ${isMember}`);
}
// isPrimeUser();  // gives compile-error which is obvious
isPrimeUser("akash@gmail.com", "akki", true);   // allowed
isPrimeUser(1, 2, 3);   // allowed and bad behavior

// solution
function isPrimeUser1(email: string, username:string, hasPaid: boolean) {
    const isMember = hasPaid ? "a member" : "not a member";
    console.log(`${username} is ${isMember}`);
}
// isPrimeUser1(1, 2, 3);   // not allowed and gives compile-error now.

// same works in arrow function
let isPrimeUser2 = (email:string, username:string, hasPaid: boolean) => {
    const isMember = hasPaid ? "a member" : "not a member";
    console.log(`${username} is ${isMember}`);
}
// by using following way we can provide default value(for boolean example -> false) for parameter
let isPrimeUser3 = (email:string, username:string, hasPaid: boolean = false) => {}