function Component(logString: string) {
    return function(constructor: Function): void {  // anonymous function
        console.log(logString);
        console.log(constructor);
    }
}

@Component("This is use case of factory. you can pass customised msgs...")
class Student {
       
    constructor(
        public name: string,
        public _id: number
    ) {}

    displayPerson(): void {
        console.log(this.name);
    }

}

// compile this file: tsc decorator_factories.ts
// run decorator_factories.html