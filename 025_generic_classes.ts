// 1.
function someFunction<T, U>(valOne: T, valTwo: U):object {
    return {
        valOne,
        valTwo
    };
}
someFunction(3, "4");   // hover on function name. returns object as number and string.

// 2.
function someOtherFunction<T, U extends number>(valOne: T, valTwo: U):object {
    return {
        valOne,
        valTwo
    };
}
// someOtherFunction(3, "4");   // compile-error. Argument of type 'string' is not assignable to parameter of type 'number'.
someOtherFunction(3, 4.52);     // allowed



// 3. use-case
interface Database {
    connection: string;
    username: string;
    password: string;
}

function someAnotherFunction<T, U extends Database>(valOne: T, valTwo: U):object {
    return {
        valOne,
        valTwo
    };
}

class DatabaseImpl implements Database {
    constructor (
        public connection: string,
        public username: string,
        public password: string
    ) {}
}

someAnotherFunction(3, new DatabaseImpl("akkiDB", "root", "root"));

// 4. another use-case
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product);
    }
}
// i. useage1
const sellable1 = new Sellable<Quiz>();
class QuizImpl implements Quiz {
    constructor (
        public name: string,
        public type: string
    ) {}
}
sellable1.addToCart(new QuizImpl("TypeScript", "NAT"));
// ii. useage2
const sellable2 = new Sellable<Course>();
class CourseImpl implements Course {
    constructor (
        public name: string,
        public author: string,
        public subject: string
    ) {}
}
sellable2.addToCart(new CourseImpl("TypeScript with akki", "Akash", "TypeScript"));