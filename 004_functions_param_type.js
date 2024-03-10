// 1.
// problem
// example 1
function increment(num) {
    num.toLowerCase(); // allowed and bad behavior
    return num + 1;
}
increment(25); // allowed
increment("Hi"); // allowed and bad behavior
// solution
function incrementBy2(num) {
    // num.toLowerCase();  // not allowed and compile-error
    return num + 2;
}
incrementBy2(23);
// incrementBy2("Hello");  // not allowed and compile-error
// problem
// example 2
function isPrimeUser(email, username, hasPaid) {
    var isMember = hasPaid ? "a member" : "not a member";
    console.log("".concat(username, " is ").concat(isMember));
}
// isPrimeUser();  // gives compile-error which is obvious
isPrimeUser("akash@gmail.com", "akki", true); // allowed
isPrimeUser(1, 2, 3); // allowed and bad behavior
// solution
function isPrimeUser1(email, username, hasPaid) {
    var isMember = hasPaid ? "a member" : "not a member";
    console.log("".concat(username, " is ").concat(isMember));
}
// isPrimeUser1(1, 2, 3);   // not allowed and gives compile-error now.
// same works in arrow function
var isPrimeUser2 = function (email, username, hasPaid) {
    var isMember = hasPaid ? "a member" : "not a member";
    console.log("".concat(username, " is ").concat(isMember));
};
// by using following way we can provide default value(for boolean example -> false) for parameter
var isPrimeUser3 = function (email, username, hasPaid) {
    if (hasPaid === void 0) { hasPaid = false; }
};
