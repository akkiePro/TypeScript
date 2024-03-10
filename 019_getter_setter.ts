class User {
    
    private _name: string;
    private _email: string;
    private _userId: number;

    public set setName(name : string) {
        this._name = name;
    }

    public get getName() : string {
        return this._name;
    }
    
    public set setEmail(email : string) {
        this._email = email;
    }

    public get getEmail() : string {
        return this._email;
    }
    
    public set setUserId(userId : number) {
        this._userId = userId;
    }

    public get getUserId() : number {
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



export {}