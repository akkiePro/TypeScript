// 1. intro
// i. member variables
interface User {
    name: string;
    _id: string;
    position: string;
    creditcardDetails?: number;
}
let newUser: User = {
    name: "Akash",
    _id: "123",
    position: "developer",
    creditcardDetails: 4321
}

// ii. member function
interface PriviledgedUser {
    _id: number;
    username: string;
    // isPrime: () => string;  // member function which must return string
    isPrime(): boolean   // another way of declaring member function in interface
    getCoupon(name: string, value: number): number
}
const newPriviledgedUser: PriviledgedUser = {
    _id: 123,
    username: "akki",
    isPrime: () => {
        return true;
    },
    // getCoupon(name) {
    getCoupon: (couponname: "coinmaker10", off: 10) => {     // it's allowed to change name of local param
        return off;
    }
}

// 2. extending interface
interface Admin extends PriviledgedUser {
    role: "admin" | "TL" | "learner";
}
let newAdmin: Admin = {
    _id: 4321,
    username: "zingur",
    role: "TL",
    isPrime() {
        return false;
    },
    getCoupon(name: "zingur15", off: 15) {
        return off;
    }
}
newAdmin.username = "zingur@dev.com";
newAdmin.role = "admin";




export {}