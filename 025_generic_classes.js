"use strict";
// 1.
function someFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
someFunction(3, "4"); // hover on function name. returns object as number and string.
// 2.
function someOtherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// someOtherFunction(3, "4");   // compile-error. Argument of type 'string' is not assignable to parameter of type 'number'.
someOtherFunction(3, 4.52); // allowed
function someAnotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class DatabaseImpl {
    constructor(connection, username, password) {
        this.connection = connection;
        this.username = username;
        this.password = password;
    }
}
someAnotherFunction(3, new DatabaseImpl("akkiDB", "root", "root"));
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
// i. useage1
const sellable1 = new Sellable();
class QuizImpl {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
sellable1.addToCart(new QuizImpl("TypeScript", "NAT"));
// ii. useage2
const sellable2 = new Sellable();
class CourseImpl {
    constructor(name, author, subject) {
        this.name = name;
        this.author = author;
        this.subject = subject;
    }
}
sellable2.addToCart(new CourseImpl("TypeScript with akki", "Akash", "TypeScript"));
