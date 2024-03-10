// 1. without inferring type
let hero;   // hover on hero you'll find any as datatype
function getHero() {
    // return "thor";
    return 1;   // now any developer has modified and return number
}
hero = getHero();   // hero will get number here


// 2. with inferring type
let hero1: string;
function getHero1() {
    return 2;   // compile-error in hero1. bcz, it's expecting string and provided number.
}
hero1 = getHero1();

export {}