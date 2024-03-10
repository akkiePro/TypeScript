// 1. pass object as param
function createUser({name: string, isPaid: boolean}) {}
createUser({name: "Akash", isPaid: true});

// 2. set object as return type
function createCourse(): {name: string, course_name: string} /*:{} means must return object*/ {
    return {name: "Akash", course_name: "TS", price: 200}   // throws compile-error because price was not asked for returning
}
createCourse();
// but this is allowed
function createCourse1(): {name: string, course_name: string} {
    let param = {name: "Akash", course_name: "TS", price: 200}
    return param;
}
console.log(createCourse1()); 

// 3. problem with object in param for default value
function createCourse2({name: "Akash", course_name: "TS", price: 200}) {}   // compile-time error. Not allowed behavior for default values of objects
// solution
let param = {name: "Akash", course_name: "TS", price: 200}
function createCourse3(param) {}

export {}