// 1. void
function consoleError(errmsg: string): void{
    console.log(errmsg);
    
    // return errmsg;  // not allowed and gives compile-error
}
consoleError("number can't be calculated");

// 2. string
// const heros = ["thor", "spiderman", "ironman"];
const heros = [1, 2, 3]

// heros.map((hero: string): string => {
heros.map((hero): string => {   // no need to specify type for param here bcz map is smart here it understands which type is inferred(to check hover on param(hero))
    return `hero is ${hero}`;
})


// 3. never: to handle errors
function handleError(errmsg: string): never{
    throw new Error(errmsg);
    
}



export {}