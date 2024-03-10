function isAdminAccount(account) {
    if ("isAdmin" in account) { // if isAdmin property is in account
        console.log("admin account and flag = " + account.isAdmin);
    }
    else
        console.log("not an admin account");
}
class UserImpl {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class AdminImpl {
    constructor(name, email, isAdmin) {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }
}
isAdminAccount(new UserImpl("", ""));
isAdminAccount(new AdminImpl("", "", false));
export {};
