// without creditcarDetails
var myUser = {
    _id: "2468",
    name: "Shruti",
    email: "zingur@dev.com",
    isActive: true,
}; // here you can see if i don't add credit card details, typescript allows this because of ?(optional) parameter
myUser.name = "akki"; // yes, it's allowed
myUser._id = "4321"; // compile-error. bcz, _id is READONLY param. use-case: in MongoDB, there's a field as _id, which is readonly.
// with creditcardDetails
var newUser = {
    _id: "2468",
    name: "Shruti",
    email: "zingur@dev.com",
    isActive: true,
    creditcardDetails: ""
};
// example 2
function getUser(id) {
    // problem: try to use any built-in string method
    id.toLowerCase(); // compile-error. bcz you created new type which can be string and number also.
    // solution
    if (typeof id === "string")
        id.toLowerCase(); // allowed.
    else
        id.toFixed(); // allowed to use built-in method of number.
}
getUser(false); // compile-error. Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
getUser(123); // allowed
getUser("123"); // allowed
getUser(123 + "456"); // also allowed
