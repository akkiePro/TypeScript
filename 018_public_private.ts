// 1. traditional way
class User {
        
    public name: string;
    private email: string;
    // #email: string;  // another way to declare private variable in TS.
    public city: string = "Ahmedabad";

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

}

const newUser = new User("Akash", "akki@gmail.com");
newUser.name = "akki";  // allowed because of public
newUser.email = "akki@dev.com";     // compile-error. not allowed bcz of private



// 2. new way
class User1 {

    constructor(
        public name: string, 
        public email: string,
        private userId: string
        ) {    }

}
const myUser1 = new User1("Akash", "akki@gmail.com", "@AkkiPro");
console.log(myUser1);

export {}