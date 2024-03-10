"use strict";
class User {
    set setName(name) {
        this._name = name;
    }
    get getName() {
        return this._name;
    }
    set setEmail(email) {
        this._email = email;
    }
    get getEmail() {
        return this._email;
    }
    set setUserId(userId) {
        this._userId = userId;
    }
    get getUserId() {
        return this._userId;
    }
}
const newUser = new User();
// setter usage
newUser.setName = "Akash";
newUser.setEmail = "akki@dev.com";
newUser.setUserId = 21;
// getter usage
console.log(`name = ${newUser.getName}, email = ${newUser.getEmail}, userId = ${newUser.getUserId}`);
