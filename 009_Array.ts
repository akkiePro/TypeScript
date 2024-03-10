// 1. intro
const superHero1 = [];   // by default infer-type is never
superHero1.push("spiderman");    // compile-error. bcz, it's not string array.

// 2. way one
const superHero: string[] = []; // way one of declaring Array of string
superHero.push("superman");
superHero.push("ironman");
// another example
const heroPowerOutOf5: number[] = [];
heroPowerOutOf5.push(2);
heroPowerOutOf5.push(4);

// 3. another way
const heroPower: Array<number> = [];    // another way of declaring Array of string
heroPower.push(2);

// 4. play with type and array
type User = {
    name: string;
    isActive: boolean;
}
const allUsers: Array<User> = [];   // way one
// const allUsers: User[] = [];    // another way
allUsers.push({name: "", isActive: false});
allUsers.push({name: "akki", isActive: true});

// 5. multi-dimentional
const MLModels: number[][] = [
    [255, 255, 255],
    [21, 255, 0]
]