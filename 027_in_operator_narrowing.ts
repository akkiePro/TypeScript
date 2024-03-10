interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if("isAdmin" in account) {      // if isAdmin property is in account
        console.log("admin account and flag = " + account.isAdmin);
    }
    else
        console.log("not an admin account");
}

class UserImpl implements User {
    constructor (
        public name: string,
        public email: string
    ) {}
}

class AdminImpl implements Admin {
    constructor (
        public name: string,
        public email: string,
        public isAdmin: boolean
    ) {}
}

isAdminAccount(new UserImpl("", ""));
isAdminAccount(new AdminImpl("", "", false));



export{}