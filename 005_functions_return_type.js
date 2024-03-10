"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. void
function consoleError(errmsg) {
    console.log(errmsg);
    // return errmsg;  // not allowed and gives compile-error
}
consoleError("number can't be calculated");
// 2. string
// const heros = ["thor", "spiderman", "ironman"];
var heros = [1, 2, 3];
// heros.map((hero: string): string => {
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// 3. never: to handle errors
function handleError(errmsg) {
    throw new Error(errmsg);
}
