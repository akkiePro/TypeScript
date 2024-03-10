type User = {
    name: string;
    email: string;
    isActive: boolean
}
function creatUser(user: User): User {
    return user;
}
console.log(creatUser({name: "Akash", email: "akki@dev.com", isActive: false}));

// another use case: write bool instead of boolean
type bool = boolean
function fun1(isPaid: bool) {}




export {}