"use strict";
// 1. traditional way
class User {
    constructor(name, email) {
        // #email: string;  // another way to declare private variable in TS.
        this.city = "Ahmedabad";
        this.name = name;
        this.email = email;
    }
}
const newUser = new User("Akash", "akki@gmail.com");
newUser.name = "akki"; // allowed because of public
newUser.email = "akki@dev.com"; // compile-error. not allowed bcz of private
// 2. new way
class User1 {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
    }
}
const myUser1 = new User1("Akash", "akki@gmail.com", "@AkkiPro");
console.log(myUser1);