class User {
    private _id: number;
    private username: string;
    public readonly city: string;
    protected _courseCount = 1;

    // getter-setter for _id
    public set setId(id : number) {
        this._id = id;
    }
    public get getId() : number {
        return this._id;
    }
    
    // getter-setter for username
    public set setUsername(username : string) {
        this.username = username;
    }
    public get getUsername() : string {
        return this.username;
    }
    
    // only getter for city. bcz, setter can't be created due to readonly 
    public get getCity() : string {
        return this.city;
    }
    
    // no getter-setter methods for courseCount
    
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;  // directly accessible to SubUser
        // this._id = 123;     // not accessible due to private resource. compile-error
    }
}