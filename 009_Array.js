// 1. intro
var superHero1 = []; // by default infer-type is never
superHero1.push("spiderman"); // compile-error. bcz, it's not string array.
// 2. way one
var superHero = []; // way one of declaring Array of string
superHero.push("superman");
superHero.push("ironman");
// another example
var heroPowerOutOf5 = [];
heroPowerOutOf5.push(2);
heroPowerOutOf5.push(4);
// 3. another way
var heroPower = []; // another way of declaring Array of string
heroPower.push(2);
var allUsers = []; // way one
// const allUsers: User[] = [];    // another way
allUsers.push({ name: "", isActive: false });
allUsers.push({ name: "akki", isActive: true });
// 5. multi-dimentional
var MLModels = [
    [255, 255, 255],
    [21, 255, 0]
];
