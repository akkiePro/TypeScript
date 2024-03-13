// Aam Zindagi
/* class Person1 {
    
    constructor(
        public name: string,
        public _id: number
    ) {}

    displayPerson(): void {
        console.log(this.name);
    }

}

const newPerson1 = new Person1("Akash", 123);
newPerson1.displayPerson(); */

// decorator zindagi
@Logger
class Person {
       
    constructor(
        public name: string,
        public _id: number
    ) {}

    displayPerson(): void {
        console.log(this.name);
    }

}

// without creating object
function Logger(constructor: Function): void {
    console.log("Welcome to decorators...");
    console.log(constructor);
}
