// 1. intro generics in Array
function getSearchProducts<T>(products : T[]) : T {
    // do some database operations for index
    const myIndex = 3;
    return products[myIndex];
}

// 2. arrow function
const getMoreSearchProducts = <T>(products: T[]) : T => {
    // do some database operations for index
    const myIndex = 42;
    return products[myIndex];
}

// 3. somewhere you can also find comma also like following, which works same.
const getMoreSearchProducts2 = <T,>(products: T[]) : T => {
    // do some database operations for index
    const myIndex = 16;
    return products[myIndex];
}