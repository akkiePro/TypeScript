interface User {
    _id: number;
    name: string;
    position: string;
    creditcardDetails?: object;
}

let akki: User = {
    _id: 13,
    name: "Akash",
    position: "dev",
    creditcardDetails: {
        number: 123456789,
        expiry_date: "14/07/2030"
    },
    githubTocken: "123XyZW4A56"
}

// now i feel i want to add some required stuff for all users
// i can re-open User interface anywhere
interface User {
    githubTocken: string;   // bcz I'm doing this i have to update all users otherwise it will throw compile-error
}