class User {
    
    name: string;
    email: string;
    city: string = "Ahmedabad";
    // readonly city: string = "Ahmedabad";

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

}

const newUser =  new User("Akash", "akki@dev.com");
newUser.city = "Mahesana";  // allowed
newUser.city = 4;   // compile-error. Type 'number' is not assignable to type 'string'.

/**
 * if you make city as readonly in User then city can't be modified.
 */



export {}