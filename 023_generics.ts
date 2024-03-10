// 1. generics intro
const scores: Array<number> = []
const names: Array<string> = []


// 2. classic way
// problem
function identityOne(val: string | number): string | number {
    return val;     // here we don't know exact return type. it could be either string or number also.
}

// solution. NOT RECOMMENDED. avoid using 'any'
function identityTwo(val : any) : any{
    return val;
}
/**
 * issue in this solution is we can't predict which type is there while returning(check by hovering at return val;).
 */

// Actual Solution: Generics
function identityThree<Type>(val : Type) : Type {
    return val;     // here whatever type of param will be followed strictly in return value.
}
identityThree(3);   // hover on function name here. return type automatically set as number
identityThree("akki");  // hover on function name here. return type automatically set as string

// shorthand method
function identityFour<T>(val : T) : T {
    return val;
}
/* you can use any letter. it's not mandatory that You have to use T */

// 3. let's play with generics
// generics also work on user-defined types
// ex.
class Bottle {
    constructor (
        private brand: string,
        private type: number
    ) {
    }
    
    public get getBrand() : string {
        return this.brand;
    }
    
    public get getType() : number {
        return this.type;
    }
    
}
const newBottle = new Bottle("hell", 4);
console.log(identityFour(newBottle));
const bottleBrand = newBottle.getBrand;
const bottleTypeNo = newBottle.getType;