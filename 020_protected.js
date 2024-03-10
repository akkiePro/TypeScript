"use strict";
class User {
    constructor() {
        this._courseCount = 1;
        // no getter-setter methods for courseCount
    }
    // getter-setter for _id
    set setId(id) {
        this._id = id;
    }
    get getId() {
        return this._id;
    }
    // getter-setter for username
    set setUsername(username) {
        this.username = username;
    }
    get getUsername() {
        return this.username;
    }
    // only getter for city. bcz, setter can't be created due to readonly 
    get getCity() {
        return this.city;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // directly accessible to SubUser
        // this._id = 123;     // not accessible due to private resource. compile-error
    }
}