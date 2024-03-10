"use strict";
class User {
    // readonly city: string = "Ahmedabad";
    constructor(name, email) {
        this.city = "Ahmedabad";
        this.name = name;
        this.email = email;
    }
}
const newUser = new User("Akash", "akki@dev.com");
newUser.city = "Mahesana"; // allowed
newUser.city = 4; // compile-error. Type 'number' is not assignable to type 'string'.
